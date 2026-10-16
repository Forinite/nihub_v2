"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  isAdminContentTable,
  requireAdmin,
  type AdminContentRow,
} from "@/lib/supabase/admin-content";
import { createSupabaseAuthServerClient } from "@/lib/supabase/server";

export interface AdminActionState {
  message: string;
  success: boolean;
}

export async function signInAction(
  _previousState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return { message: "Enter your email and password.", success: false };
  }

  const supabase = await createSupabaseAuthServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { message: "Sign in failed. Check your credentials and try again.", success: false };
  }

  redirect("/admin");
}

export async function signOutAction() {
  const supabase = await createSupabaseAuthServerClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(`Failed to sign out: ${error.message}`);
  }

  redirect("/admin/login");
}

function parseAdminFieldValue(key: string, value: FormDataEntryValue | null) {
  if (value === null) return "";
  const text = String(value);

  if (text === "on" || text === "true") return true;
  if (text === "false") return false;
  if (text === "" || text === "null") return "";

  if (["sort_order"].includes(key)) {
    const numeric = Number(text);
    return Number.isNaN(numeric) ? text : numeric;
  }

  if (["seats"].includes(key)) {
    const numeric = Number(text);
    return Number.isNaN(numeric) ? text : numeric;
  }

  return text;
}

export async function saveContentAction(
  _previousState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const tableValue = formData.get("table");
  const recordText = formData.get("record");
  const idValue = formData.get("id");

  if (typeof tableValue !== "string" || !isAdminContentTable(tableValue)) {
    return { message: "Choose a valid content type.", success: false };
  }

  let record: AdminContentRow | undefined;

  if (typeof recordText === "string" && recordText.trim()) {
    try {
      const parsed = JSON.parse(recordText);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        record = parsed as AdminContentRow;
      }
    } catch {
      return { message: "Enter valid JSON before saving.", success: false };
    }
  }

  if (!record) {
    const rawRecord = Object.fromEntries(
      Array.from(formData.entries())
        .filter(
          ([key]) =>
            !["table", "id", "record"].includes(key) && !key.startsWith("_")
        )
        .map(([key, value]) => [key, parseAdminFieldValue(key, value)])
    ) as AdminContentRow;

    record = rawRecord;
  }

  if (!record || typeof record !== "object" || Array.isArray(record)) {
    return { message: "A content record must be a JSON object.", success: false };
  }

  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) {
    return { message: "You are not authorized to edit content.", success: false };
  }

  const editableRecord = { ...(record as AdminContentRow) };
  delete editableRecord.id;
  delete editableRecord.created_at;
  delete editableRecord.updated_at;

  const query =
    typeof idValue === "string" && idValue
      ? supabase.from(tableValue).update(editableRecord).eq("id", idValue)
      : supabase.from(tableValue).insert(editableRecord);
  const { error } = await query;

  if (error) {
    return { message: `Save failed: ${error.message}`, success: false };
  }

  revalidatePath("/", "layout");
  return { message: "Content saved.", success: true };
}

export async function deleteContentAction(
  _previousState: AdminActionState,
  formData: FormData
): Promise<AdminActionState> {
  const tableValue = formData.get("table");
  const idValue = formData.get("id");

  if (
    typeof tableValue !== "string" ||
    !isAdminContentTable(tableValue) ||
    typeof idValue !== "string" ||
    !idValue
  ) {
    return { message: "Choose a valid content record to delete.", success: false };
  }

  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) {
    return { message: "You are not authorized to delete content.", success: false };
  }

  const { error } = await supabase.from(tableValue).delete().eq("id", idValue);
  if (error) {
    return { message: `Delete failed: ${error.message}`, success: false };
  }

  revalidatePath("/", "layout");
  redirect(`/admin?table=${encodeURIComponent(tableValue)}`);
}

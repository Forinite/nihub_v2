import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { createSupabaseAuthServerClient } from "@/lib/supabase/server";

export const ADMIN_CONTENT_TABLES = [
  "site_stats",
  "communities",
  "events",
  "trainings",
  "services",
  "team_members",
  "achievements",
  "home_programs",
  "testimonials",
  "partners",
  "content_items",
] as const;

export type AdminContentTable = (typeof ADMIN_CONTENT_TABLES)[number];
export type AdminContentRow = Record<string, unknown>;

export function isAdminContentTable(value: string): value is AdminContentTable {
  return ADMIN_CONTENT_TABLES.some((table) => table === value);
}

export async function requireAdmin() {
  const supabase = await createSupabaseAuthServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { supabase, user: null, isAdmin: false };
  }

  const { data, error } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to verify CMS administrator access: ${error.message}`);
  }

  return { supabase, user, isAdmin: Boolean(data) };
}

export async function getAdminContentRows(
  supabase: SupabaseClient,
  table: AdminContentTable
) {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("updated_at", { ascending: false })
    .limit(100);

  if (error) {
    throw new Error(`Failed to load ${table} in the CMS: ${error.message}`);
  }

  return (data ?? []) as AdminContentRow[];
}

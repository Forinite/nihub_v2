"use client";

import { useActionState } from "react";
import {
  deleteContentAction,
  saveContentAction,
} from "@/app/admin/actions";
import type {
  AdminContentRow,
  AdminContentTable,
} from "@/lib/supabase/admin-content";

const initialState = { message: "", success: false };

const tableFieldMap: Record<AdminContentTable, Array<string>> = {
  site_stats: ["section", "label", "value", "note", "sort_order", "is_published"],
  communities: [
    "slug",
    "name",
    "icon_key",
    "catch_phrase",
    "abbreviation",
    "main_concept",
    "description",
    "member_count",
    "meeting_frequency",
    "join_url",
    "details_url",
    "is_featured",
    "sort_order",
    "is_published",
  ],
  events: [
    "slug",
    "name",
    "icon_key",
    "status",
    "event_type",
    "description",
    "date_label",
    "starts_at",
    "starts_label",
    "venue",
    "seats",
    "registration_url",
    "details_url",
    "is_headline",
    "is_featured",
    "sort_order",
    "is_published",
  ],
  trainings: [
    "slug",
    "name",
    "icon_key",
    "description",
    "status",
    "date_label",
    "duration",
    "venue",
    "cost",
    "apply_url",
    "details_url",
    "sort_order",
    "is_published",
  ],
  services: [
    "slug",
    "label",
    "icon_key",
    "main_concept",
    "description",
    "catch_phrase",
    "apply_label",
    "apply_url",
    "details_url",
    "sort_order",
    "is_published",
  ],
  team_members: [
    "name",
    "role",
    "statement",
    "image_path",
    "sort_order",
    "is_published",
  ],
  achievements: [
    "year",
    "title",
    "description",
    "icon_key",
    "sort_order",
    "is_published",
  ],
  home_programs: [
    "title",
    "status",
    "description",
    "image_path",
    "venue",
    "date_label",
    "link",
    "sort_order",
    "is_published",
  ],
  testimonials: ["name", "title", "quote", "sort_order", "is_published"],
  partners: ["name", "partner_type", "image_path", "sort_order", "is_published"],
  content_items: [
    "section",
    "title",
    "description",
    "icon_key",
    "image_path",
    "sort_order",
    "is_published",
  ],
};

function getFieldValue(row: AdminContentRow | undefined, key: string) {
  if (!row) return "";
  const value = row[key];
  if (value === null || value === undefined) return "";
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

function FieldInput({
  name,
  label,
  value,
  type = "text",
}: {
  name: string;
  label: string;
  value: string;
  type?: "text" | "textarea" | "checkbox" | "number";
}) {
  const baseClassName =
    "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-purple-700 focus:outline-none";

  if (type === "checkbox") {
    return (
      <label className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-800">
        <input type="checkbox" name={name} defaultChecked={value === "true"} />
        <span>{label}</span>
      </label>
    );
  }

  if (type === "textarea") {
    return (
      <label className="block text-sm font-medium text-gray-800">
        {label}
        <textarea
          name={name}
          rows={4}
          defaultValue={value}
          className={`${baseClassName} min-h-[110px]`}
        />
      </label>
    );
  }

  return (
    <label className="block text-sm font-medium text-gray-800">
      {label}
      <input
        type={type}
        name={name}
        defaultValue={value}
        className={baseClassName}
      />
    </label>
  );
}

function RecordForm({
  table,
  row,
}: {
  table: AdminContentTable;
  row?: AdminContentRow;
}) {
  const [saveState, saveAction, savePending] = useActionState(
    saveContentAction,
    initialState
  );
  const [deleteState, deleteAction, deletePending] = useActionState(
    deleteContentAction,
    initialState
  );
  const id = typeof row?.id === "string" ? row.id : "";
  const fields = tableFieldMap[table];

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-semibold text-gray-900">
          {id ? `Record ${id.slice(0, 8)}` : "New record"}
        </h2>
        {row && (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              row.is_published === true
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {row.is_published === true ? "Published" : "Draft"}
          </span>
        )}
      </div>

      <form action={saveAction} className="space-y-4">
        <input type="hidden" name="table" value={table} />
        <input type="hidden" name="id" value={id} />

        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => {
            const isBoolean =
              field === "is_published" ||
              field === "is_featured" ||
              field === "is_headline";
            const isLongText =
              field === "description" ||
              field === "quote" ||
              field === "statement" ||
              field === "catch_phrase" ||
              field === "main_concept" ||
              field === "note";

            return isBoolean ? (
              <div key={field} className="md:col-span-2">
                <FieldInput
                  name={field}
                  label={field.replace(/_/g, " ")}
                  value={getFieldValue(row, field)}
                  type="checkbox"
                />
              </div>
            ) : isLongText ? (
              <div key={field} className="md:col-span-2">
                <FieldInput
                  name={field}
                  label={field.replace(/_/g, " ")}
                  value={getFieldValue(row, field)}
                  type="textarea"
                />
              </div>
            ) : (
              <div key={field} className="md:col-span-1">
                <FieldInput
                  name={field}
                  label={field.replace(/_/g, " ")}
                  value={getFieldValue(row, field)}
                  type={field === "sort_order" || field === "seats" || field === "year" ? "number" : "text"}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            disabled={savePending}
            className="rounded-lg bg-purple-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {savePending ? "Saving…" : "Save record"}
          </button>
          {row && (
            <button
              formAction={deleteAction}
              disabled={deletePending}
              formNoValidate
              onClick={(event) => {
                if (!window.confirm("Permanently delete this content record?")) {
                  event.preventDefault();
                }
              }}
              className="rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 disabled:opacity-60"
            >
              {deletePending ? "Deleting…" : "Delete"}
            </button>
          )}
          {(saveState.message || deleteState.message) && (
            <p
              role="status"
              className={`text-sm ${
                saveState.success || deleteState.success
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {saveState.message || deleteState.message}
            </p>
          )}
        </div>
      </form>
    </article>
  );
}

export default function ContentEditor({
  table,
  rows,
}: {
  table: AdminContentTable;
  rows: AdminContentRow[];
}) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-4 text-sm text-purple-900">
        Use the form below to update content without writing JSON. If you need a
        custom advanced edit, we can add a JSON fallback later.
      </div>
      <RecordForm table={table} />
      {rows.length === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
          No records in this section yet.
        </p>
      ) : (
        rows.map((row, index) => (
          <RecordForm
            key={typeof row.id === "string" ? row.id : `${table}-${index}`}
            table={table}
            row={row}
          />
        ))
      )}
    </div>
  );
}

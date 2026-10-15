import Link from "next/link";
import { redirect } from "next/navigation";
import { signOutAction } from "@/app/admin/actions";
import ContentEditor from "@/app/admin/content-editor";
import {
  ADMIN_CONTENT_TABLES,
  getAdminContentRows,
  isAdminContentTable,
  requireAdmin,
} from "@/lib/supabase/admin-content";

const tableLabels: Record<(typeof ADMIN_CONTENT_TABLES)[number], string> = {
  site_stats: "Site stats",
  communities: "Communities",
  events: "Events",
  trainings: "Trainings",
  services: "Services",
  team_members: "Team members",
  achievements: "Achievements",
  home_programs: "Home programs",
  testimonials: "Testimonials",
  partners: "Partners",
  content_items: "Other content",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ table?: string }>;
}) {
  const { supabase, user, isAdmin } = await requireAdmin();
  if (!user) redirect("/admin/login");
  if (!isAdmin) {
    return (
      <section className="mx-auto my-20 max-w-2xl rounded-2xl border border-amber-300 bg-amber-50 p-8">
        <h1 className="text-2xl font-bold text-gray-950">Access not approved</h1>
        <p className="mt-2 text-gray-700">
          Your account is signed in but is not authorized to manage NIHUB content.
          Ask an administrator to add your user ID to the admin allowlist.
        </p>
        <form action={signOutAction} className="mt-5">
          <button className="rounded-lg bg-purple-900 px-4 py-2 font-semibold text-white">
            Sign out
          </button>
        </form>
      </section>
    );
  }

  const params = await searchParams;
  const requestedTable = params.table ?? "";
  const table = isAdminContentTable(requestedTable)
    ? requestedTable
    : ADMIN_CONTENT_TABLES[0];
  const rows = await getAdminContentRows(supabase, table);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-800">
            NIHUB CMS
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950">Content manager</h1>
          <p className="mt-1 text-sm text-gray-600">{user.email}</p>
        </div>
        <form action={signOutAction}>
          <button className="rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-800">
            Sign out
          </button>
        </form>
      </header>

      <nav aria-label="Content types" className="mb-6 flex flex-wrap gap-2">
        {ADMIN_CONTENT_TABLES.map((item) => (
          <Link
            key={item}
            href={`/admin?table=${item}`}
            aria-current={table === item ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              table === item
                ? "bg-purple-900 text-white"
                : "border border-gray-300 bg-white text-gray-800"
            }`}
          >
            {tableLabels[item]}
          </Link>
        ))}
      </nav>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-950">{tableLabels[table]}</h2>
        <p className="text-sm text-gray-600">
          Fill in the form below—no JSON required. Publish items by checking the
          published field.
        </p>
      </div>
      <ContentEditor table={table} rows={rows} />
    </section>
  );
}

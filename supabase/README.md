# Supabase backend

Supabase stores public editorial content for the NIHUB website. Server-side
Next.js helpers query the database using the publishable key. Public pages can
read published content; Row Level Security (RLS) remains enabled. Content
changes require an authenticated user listed in `public.admin_users`.

The application does not use a service-role key. Do not put one in `.env.local`,
browser code, or any `NEXT_PUBLIC_` variable.

## First-time database setup

Create a Supabase project, then apply every SQL migration in the Supabase SQL
Editor in filename order:

1. `migrations/20261015000000_initial_content_schema.sql`
2. `migrations/20261015000001_about_content_constraints.sql`
3. `migrations/20261015000002_home_content_constraints.sql`
4. `migrations/20261015000003_admin_access.sql`
5. `migrations/20261015000004_partner_categories.sql`

Each migration should complete successfully before proceeding to the next. The
partner-category migration adds the `partner_type` field used to distinguish
homepage partner logos from service partner/accreditor names.

After applying the migrations, run the seed scripts in this order:

1. `seeds/about.sql`
2. `seeds/communities.sql`
3. `seeds/events-and-trainings.sql`
4. `seeds/home.sql`
5. `seeds/services.sql`
6. `seeds/remaining-public-content.sql`

The seed scripts populate published example/editorial content. They use
conflict handling to support re-running them, but re-running a seed overwrites
the seeded fields for matching records. Review seed files before using them to
refresh production data.

## Environment configuration

Set these values in the application's `.env.local` file:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable-key>
```

Use the project URL and publishable/anon key from the Supabase project settings.
The matching names and blank values are in `.env.example`. Keep `.env.local`
private and do not commit real credentials.

## Security and access model

- RLS is enabled for content tables.
- Anonymous and authenticated visitors can select published content only.
- Only authenticated users allowlisted in `public.admin_users` may manage
  content, including drafts.
- No public write policies are provided for content.
- `/admin` uses Supabase Auth email/password login and the user's session.
- The application uses the publishable key and does not require a service-role
  key.

Create and allowlist the first CMS administrator using the steps in
[the Admin CMS guide](./ADMIN-CMS.md). Verify public read restrictions and admin
write access before deploying.

## Application integration

Public pages query Supabase through server-only helpers in `lib/supabase/`.
Database rows are mapped to frontend content contracts in `lib/content-types.ts`;
approved icon and image keys are mapped in `lib/content-icons.ts` and
`lib/content-images.ts`.

Published content is ordered using `sort_order`. The public pages use a
60-second revalidation interval, and successful CMS saves invalidate the site
layout cache. Some page presentation copy and local assets remain in the
frontend rather than being CMS-managed.

## Updating the database

For a schema change, add a new, timestamped SQL file under `migrations/`; do not
edit an already-applied migration. Apply the new migration in Supabase before
deploying code that depends on it. Update relevant seed data and documentation
when the schema or content workflow changes.

For content changes, use `/admin` where practical. Seed SQL is intended for
initial content setup and controlled bulk updates, not routine editing.

## Verification

From the project root:

```powershell
npm.cmd run lint
npm.cmd run build
```

The production build reads the configured Supabase project while prerendering
public pages. A build error that names a missing database column usually means
the matching migration has not yet been applied to that project.

# NIHUB Admin CMS guide

The CMS is available at `/admin`. It uses Supabase Auth email/password
sign-in. Only authenticated users listed in `public.admin_users` can access
drafts or change content. The CMS uses the publishable key and the user's
session; it does not use a service-role key.

## Enable administrator access

1. Apply all migrations in `migrations/` in filename order, then run the seed
   scripts listed in [`README.md`](./README.md).
2. In Supabase Dashboard, open **Authentication → Users** and create an
   administrator account with email and password.
3. Copy that account's user UUID and add it to the allowlist in the SQL Editor:

   ```sql
   insert into public.admin_users (user_id)
   values ('<auth-user-uuid>');
   ```

4. Visit `/admin/login` and sign in with that account.

To revoke CMS access, delete that user's row from `public.admin_users`. The
account remains available for other Supabase Auth uses.

## Editing and publishing content

In `/admin`, choose a content type and edit its labeled form fields. Set
`is_published` to publish a record to public pages; turn it off to keep the
record as a draft. Saving content revalidates the site's cached routes.
Deleting a record is permanent.

The editor displays up to 100 most recently updated records for each content
type. Asset paths and icon keys must match assets already supported by the
frontend. Content saves remain subject to database constraints and RLS.

For records with ordering controls, lower `sort_order` values appear first.
Events marked `is_featured` are eligible for the homepage and Events page
featured-event cards; mark only the intended event as featured. A featured
event's `starts_at` timestamp controls its countdown. `date_label` remains the
human-readable date shown on the cards.

Partner records have a `partner_type`:

- `general` is used for homepage partner/sponsor logos. Supply an `image_path`
  for the image asset.
- `service` is used for the text-only service partner/accreditor list. The
  `image_path` can be left blank.

The public site only reads published records. Most public pages are revalidated
every 60 seconds; successful CMS saves also invalidate the site cache.

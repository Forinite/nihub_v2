import "server-only";

import type { Community } from "@/lib/content-types";
import { getContentIcon } from "@/lib/content-icons";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface CommunityRow {
  icon_key: string;
  name: string;
  catch_phrase: string;
  abbreviation: string;
  main_concept: string;
  description: string;
  keywords: string[];
  member_count: string;
  meeting_frequency: string;
  partner_label: string | null;
  join_url: string;
  details_url: string;
}

export async function getCommunities(options: { featured?: boolean } = {}) {
  const supabase = createSupabaseServerClient();
  let query = supabase
    .from("communities")
    .select(
      "icon_key, name, catch_phrase, abbreviation, main_concept, description, keywords, member_count, meeting_frequency, partner_label, join_url, details_url"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (options.featured) {
    query = query.eq("is_featured", true);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to load communities from Supabase: ${error.message}`);
  }

  return (data as CommunityRow[]).map(
    (row): Community => ({
      icon: getContentIcon(row.icon_key),
      name: row.name,
      catchPhrase: row.catch_phrase,
      abbr: row.abbreviation,
      mainConcept: row.main_concept,
      description: row.description,
      keywords: row.keywords,
      stats: {
        members: row.member_count,
        meetings: row.meeting_frequency,
        ...(row.partner_label ? { partner: row.partner_label } : {}),
      },
      joinLink: row.join_url,
      learnMoreLink: row.details_url,
    })
  );
}

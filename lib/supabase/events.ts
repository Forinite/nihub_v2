import "server-only";

import type { EventContent, TrainingContent } from "@/lib/content-types";
import { getContentIcon } from "@/lib/content-icons";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface EventRow {
  icon_key: string;
  status: string;
  event_type: string;
  name: string;
  description: string;
  date_label: string;
  starts_at: string | null;
  starts_label: string;
  venue: string;
  seats: number | null;
  color_rgb: number[];
  keywords: string[];
  registration_url: string;
  details_url: string;
}

interface TrainingRow {
  icon_key: string;
  name: string;
  description: string;
  status: string;
  date_label: string;
  duration: string;
  venue: string;
  partner_label: string | null;
  cost: string;
  color_rgb: number[];
  apply_url: string;
  details_url: string;
}

export async function getEvents(
  options: { headline?: boolean; featured?: boolean } = {}
) {
  const supabase = createSupabaseServerClient();
  let query = supabase
    .from("events")
    .select(
      "icon_key, status, event_type, name, description, date_label, starts_at, starts_label, venue, seats, color_rgb, keywords, registration_url, details_url"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (options.headline) {
    query = query.eq("is_headline", true);
  }
  if (options.featured) {
    query = query.eq("is_featured", true);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to load events from Supabase: ${error.message}`);
  }

  return (data as EventRow[]).map(
    (row): EventContent => ({
      icon: getContentIcon(row.icon_key),
      status: row.status,
      type: row.event_type,
      name: row.name,
      description: row.description,
      date: row.date_label,
      startsAt: row.starts_at,
      starts: row.starts_label,
      venue: row.venue,
      seats: row.seats === null ? "" : String(row.seats),
      rgb: row.color_rgb,
      keywords: row.keywords,
      registerLink: row.registration_url,
      learnMoreLink: row.details_url,
    })
  );
}

export async function getTrainings() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("trainings")
    .select(
      "icon_key, name, description, status, date_label, duration, venue, partner_label, cost, color_rgb, apply_url, details_url"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load trainings from Supabase: ${error.message}`);
  }

  return (data as TrainingRow[]).map(
    (row): TrainingContent => ({
      icon: getContentIcon(row.icon_key),
      name: row.name,
      description: row.description,
      status: row.status,
      date: row.date_label,
      duration: row.duration,
      venue: row.venue,
      ...(row.partner_label ? { partner: row.partner_label } : {}),
      cost: row.cost,
      rgb: row.color_rgb,
      applylink: row.apply_url,
      detailLink: row.details_url,
    })
  );
}

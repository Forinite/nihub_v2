import "server-only";

import type {
  CorePillarContent,
  HomeProgramContent,
  PartnerContent,
  SiteStatContent,
  TestimonialContent,
} from "@/lib/content-types";
import { getContentImage } from "@/lib/content-images";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface HomeProgramRow {
  image_path: string;
  status: string;
  title: string;
  description: string;
  venue: string;
  date_label: string;
  link: string;
}

interface TestimonialRow {
  name: string;
  title: string;
  quote: string;
}

interface PartnerRow {
  name: string;
  image_path: string | null;
}

interface ContentItemRow {
  title: string;
  description: string | null;
  icon_key: string | null;
}

export async function getSiteStats(
  section:
    | "home_hero"
    | "home_impact"
    | "community_hero"
    | "community_impact"
    | "events_hero"
    | "events_impact"
): Promise<SiteStatContent[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("site_stats")
    .select("label, value, note")
    .eq("section", section)
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load ${section} stats from Supabase: ${error.message}`);
  }

  return data as SiteStatContent[];
}

export async function getHomePrograms() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("home_programs")
    .select("image_path, status, title, description, venue, date_label, link")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load homepage programmes from Supabase: ${error.message}`);
  }

  return (data as HomeProgramRow[]).map(
    (row): HomeProgramContent => ({
      image: row.image_path,
      status: row.status,
      title: row.title,
      description: row.description,
      venue: row.venue,
      date: row.date_label,
      link: row.link,
    })
  );
}

export async function getTestimonials() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("name, title, quote")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load testimonials from Supabase: ${error.message}`);
  }

  return (data as TestimonialRow[]).map(
    (row): TestimonialContent => ({
      name: row.name,
      title: row.title,
      comment: row.quote,
    })
  );
}

export async function getPartners() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("partners")
    .select("name, image_path")
    .eq("is_published", true)
    .eq("partner_type", "general")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load partners from Supabase: ${error.message}`);
  }

  return (data as PartnerRow[])
    .filter((row): row is PartnerRow & { image_path: string } => Boolean(row.image_path))
    .map(
      (row): PartnerContent => ({
        partner: row.name,
        image: row.image_path,
      })
    );
}

export async function getRecognitionAwards() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("content_items")
    .select("title")
    .eq("section", "awards")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load recognition awards from Supabase: ${error.message}`);
  }

  return data.map((row) => row.title);
}

export async function getImageContentItems(section: "core_pillars" | "about_statements") {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("content_items")
    .select("title, description, icon_key")
    .eq("section", section)
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load ${section} from Supabase: ${error.message}`);
  }

  return (data as ContentItemRow[]).map(
    (row): CorePillarContent => {
      if (!row.description || !row.icon_key) {
        throw new Error(`Published ${section} item "${row.title}" is missing content.`);
      }

      return {
        title: row.title,
        description: row.description,
        img: getContentImage(row.icon_key),
      };
    }
  );
}

import "server-only";

import type {
  ServiceContent,
  ServiceEditorialContent,
} from "@/lib/content-types";
import { getContentIcon } from "@/lib/content-icons";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface ServiceRow {
  icon_key: string;
  label: string;
  main_concept: string;
  description: string;
  color_rgb: number[];
  catch_phrase: string;
  keywords: string[];
  apply_label: string;
  apply_url: string;
  details_url: string;
}

interface ServiceEditorialRow {
  title: string;
  description: string | null;
  icon_key: string | null;
}

export async function getServices() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("services")
    .select(
      "icon_key, label, main_concept, description, color_rgb, catch_phrase, keywords, apply_label, apply_url, details_url"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load services from Supabase: ${error.message}`);
  }

  return (data as ServiceRow[]).map(
    (row): ServiceContent => ({
      icon: getContentIcon(row.icon_key),
      label: row.label,
      mainConcept: row.main_concept,
      description: row.description,
      rgb: row.color_rgb,
      catchPhrase: row.catch_phrase,
      keywords: row.keywords,
      apply: {
        label: row.apply_label,
        link: row.apply_url,
      },
      detailLink: row.details_url,
    })
  );
}

export async function getServiceEditorialItems(
  section: "service_process" | "service_benefits"
): Promise<ServiceEditorialContent[]> {
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

  return (data as ServiceEditorialRow[]).map((row) => {
    if (!row.description || !row.icon_key) {
      throw new Error(`Published ${section} item "${row.title}" is missing content.`);
    }

    return {
      title: row.title,
      description: row.description,
      icon: getContentIcon(row.icon_key),
    };
  });
}

export async function getServicePartners(): Promise<string[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("partners")
    .select("name")
    .eq("is_published", true)
    .eq("partner_type", "service")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load service partners from Supabase: ${error.message}`);
  }

  return data.map((row) => row.name);
}

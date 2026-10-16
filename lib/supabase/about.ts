import "server-only";

import type {
  AchievementContent,
  TeamMemberContent,
} from "@/lib/content-types";
import { getAchievementIcon, getTeamImage } from "@/lib/content-images";
import { createSupabaseServerClient } from "@/lib/supabase/server";

interface TeamMemberRow {
  name: string;
  role: string;
  statement: string;
  image_path: string;
  social_links: string[];
}

interface AchievementRow {
  year: number;
  title: string;
  description: string;
  icon_key: string;
}

export async function getTeamMembers() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("team_members")
    .select("name, role, statement, image_path, social_links")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load team members from Supabase: ${error.message}`);
  }

  return (data as TeamMemberRow[]).map(
    (row): TeamMemberContent => ({
      image: getTeamImage(row.image_path),
      name: row.name,
      role: row.role,
      statement: row.statement,
      socials: row.social_links,
    })
  );
}

export async function getAchievements() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("achievements")
    .select("year, title, description, icon_key")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Failed to load achievements from Supabase: ${error.message}`);
  }

  return (data as AchievementRow[]).map(
    (row): AchievementContent => ({
      year: String(row.year),
      img: getAchievementIcon(row.icon_key),
      title: row.title,
      description: row.description,
    })
  );
}

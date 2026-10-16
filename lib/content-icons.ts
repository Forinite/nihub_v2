import {
  BoltIcon,
  BookIcon,
  BuildingsIcon,
  BarChartIcon,
  BrainIcon,
  BulbIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  MedalIcon,
  MessageIcon,
  PeopleIcon,
  RocketIcon,
  SheildIcon,
  StarIcon,
  StackIcon,
  TechChipIcon,
  WifiIcon,
} from "@/components/SVGAids/SVG";
import type { ContentIconProps } from "@/lib/content-types";
import type { ComponentType } from "react";

const contentIcons: Record<string, ComponentType<ContentIconProps>> = {
  BoltIcon,
  BookIcon,
  BuildingsIcon,
  BarChartIcon,
  BrainIcon,
  BulbIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  MedalIcon,
  MessageIcon,
  PeopleIcon,
  RocketIcon,
  SheildIcon,
  StarIcon,
  StackIcon,
  TechChipIcon,
  WifiIcon,
};

export function getContentIcon(iconKey: string) {
  const icon = contentIcons[iconKey];

  if (!icon) {
    throw new Error(`Unknown content icon key: "${iconKey}"`);
  }

  return icon;
}

import type { ComponentType } from "react";
import type { ImageProps } from "next/image";
import type { StaticImageData } from "next/image";

export interface ContentIconProps {
  color: string;
  width: string;
  height: string;
}

export interface Community {
  icon: ComponentType<ContentIconProps>;
  name: string;
  catchPhrase: string;
  abbr: string;
  mainConcept: string;
  description: string;
  keywords: string[];
  stats: {
    members: string;
    meetings: string;
    partner?: string;
  };
  joinLink: string;
  learnMoreLink: string;
}

export interface EventContent {
  rgb: number[];
  icon: ComponentType<ContentIconProps>;
  status: string;
  type: string;
  name: string;
  description: string;
  date: string;
  startsAt: string | null;
  starts: string;
  venue: string;
  seats: string;
  keywords: string[];
  registerLink: string;
  learnMoreLink: string;
}

export interface TrainingContent {
  rgb: number[];
  icon: ComponentType<ContentIconProps>;
  name: string;
  description: string;
  status: string;
  date: string;
  duration: string;
  venue: string;
  partner?: string;
  cost: string;
  applylink: string;
  detailLink: string;
}

export interface ServiceContent {
  icon: ComponentType<ContentIconProps>;
  label: string;
  mainConcept: string;
  description: string;
  rgb: number[];
  catchPhrase: string;
  keywords: string[];
  apply: {
    label: string;
    link: string;
  };
  detailLink: string;
}

export interface SiteStatContent {
  label: string;
  value: string;
  note: string | null;
}

export interface ServiceEditorialContent {
  icon: ComponentType<ContentIconProps>;
  title: string;
  description: string;
}

export interface TeamMemberContent {
  image: ImageProps["src"];
  name: string;
  role: string;
  statement: string;
  socials: string[];
}

export interface AchievementContent {
  year: string;
  img: StaticImageData;
  title: string;
  description: string;
}

export interface HomeProgramContent {
  image: string;
  status: string;
  title: string;
  description: string;
  venue: string;
  date: string;
  link: string;
}

export interface TestimonialContent {
  name: string;
  title: string;
  comment: string;
}

export interface PartnerContent {
  partner: string;
  image: string;
}

export interface CorePillarContent {
  title: string;
  description: string;
  img: StaticImageData;
}

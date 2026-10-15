import {
  BulbIcon,
  BookIcon,
  ChipIcon,
  GlobalIcon,
  PeopleIcon,
  PurpleBoltIcon,
  PurpleMedalIcon,
  PurpleSheildIcon,
  PurpleStarIcon,
  StatUpIcon,
} from "@/static-data/images";
import { teamImages } from "@/static-data/images";
import type { StaticImageData } from "next/image";

const teamImagePaths: Record<string, string> = Object.fromEntries(
  teamImages.map((image, index) => [
    `/assets/images/external/team/t${index + 1}.${index === 6 ? "png" : "jpg"}`,
    image.src,
  ])
);

const achievementIcons = {
  PurpleMedalIcon,
  PurpleBoltIcon,
  PurpleStarIcon,
  StatUpIcon,
  BookIcon,
  ChipIcon,
};

const contentImages: Record<string, StaticImageData> = {
  BulbIcon,
  BookIcon,
  ChipIcon,
  GlobalIcon,
  PeopleIcon,
  PurpleSheildIcon,
};

export function getTeamImage(path: string) {
  const image = teamImagePaths[path];

  if (!image) {
    throw new Error(`Unknown team image path: "${path}"`);
  }

  return image;
}

export function getAchievementIcon(iconKey: string) {
  const icon = achievementIcons[iconKey as keyof typeof achievementIcons];

  if (!icon) {
    throw new Error(`Unknown achievement icon key: "${iconKey}"`);
  }

  return icon;
}

export function getContentImage(iconKey: string) {
  const image = contentImages[iconKey];

  if (!image) {
    throw new Error(`Unknown content image key: "${iconKey}"`);
  }

  return image;
}

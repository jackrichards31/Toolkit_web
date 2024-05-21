import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "icon/sun.svg" },
  { value: "dark", label: "Dark", icon: "icon/moon.svg" },
  { value: "system", label: "System", icon: "icon/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/icon/merchant.png",
    route: "/merchant/{options}",
    desc: "Find MID, Agent, and Processor.",
    label: "Merchant",
    options: ["MID", "Agent", "Processor"],
  },
  {
    imgURL: "/icon/credit-card.svg",
    route: "/merchant/{options}",
    desc: "Report the FSP",
    label: "FSP",
    options: ["FSP"],
  },
  {
    imgURL: "/icon/bank-transfer.svg",
    route: "/Ad-hoc",
    desc: "Report Ad Hoc",
    label: "Ad Hoc",
    options: ["Ad Hoc"],
  },
  {
    imgURL: "/icon/deposit.svg",
    route: "/Admin",
    desc: "Admin panel",
    label: "Admin",
    options: ["Admin"],
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

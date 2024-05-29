import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "icon/sun.svg" },
  { value: "dark", label: "Dark", icon: "icon/moon.svg" },
  { value: "system", label: "System", icon: "icon/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/icon/merchant.png",
    route: "/merchant/props",
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

export const profileLinks = [
  {
    title: "Profile",
    url: "/profile/id/profile",
  },
  {
    title: "Account",
  },
  {
    title: "Appearance",
  },
  {
    title: "Notifications",
  },
];

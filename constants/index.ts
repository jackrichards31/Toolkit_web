import { SidebarLink } from "@/types";
import { Store, FileDown, UserCog } from "lucide-react";

export const themes = [
  { value: "light", label: "Light", icon: "icon/sun.svg" },
  { value: "dark", label: "Dark", icon: "icon/moon.svg" },
  { value: "system", label: "System", icon: "icon/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    icon: Store,
    route: "/merchant",
    desc: "Find MID, Agent, and Processor.",
    label: "Merchant",
    options: ["MID", "Agent", "Processor"],
  },
  {
    icon: FileDown,
    route: "/merchant/{options}",
    desc: "Report the FSP",
    label: "FSP",
    options: ["FSP"],
  },
  {
    icon: FileDown,
    route: "/Ad-hoc",
    desc: "Report Ad Hoc",
    label: "Ad Hoc",
    options: ["Ad Hoc"],
  },
  {
    icon: UserCog,
    route: "/Admin",
    desc: "Admin panel",
    label: "Admin",
    options: ["Admin"],
  },
];

export const profileLinks = [
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Settings",
    url: "/settings",
  },
  {
    title: "Logout",
    url: "/logout",
  },
];

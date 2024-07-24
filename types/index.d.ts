import type { LucideIcon } from "lucide-react";

export interface SidebarLink {
  icon: LucideIcon;
  route: string;
  desc: string;
  label: string;
  options: string[];
}

export interface ContentItem {
  [key: string]: string | number;
}

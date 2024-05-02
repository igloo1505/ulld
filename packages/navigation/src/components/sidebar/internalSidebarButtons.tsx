import { Route } from "next";
import { SidebarLink } from "@ulld/configschema/types";
import { toggleDarkMode } from "@ulld/state/actions/clientOnly/general";
import { syncRootDirectory } from "@ulld/api/actions/syncing";

/* TODO: Add more useful icons here. Consider making this dynamic in the settings object to make this variable without the need to rebuild. */
export const internalLinks: Record<string, SidebarLink> = {
  darkMode: {
    icon: "darktoggle",
    onClick: toggleDarkMode,
    label: "Dark Mode",
  },
  equations: {
    icon: "math",
    href: "/equations" as Route,
    label: "Equations",
  },
  jupyter: {
    icon: "jupyter",
    href: "/notebooks" as Route,
    label: "Jupyter",
  },
  snippets: {
    icon: "code-2",
    href: "/snippets" as Route,
    label: "Snippets",
  },
  calendar: {
    icon: "calendar",
    href: "/calendar?past=true" as Route,
    label: "Calendar",
  },
  sync: {
    icon: "folder-sync",
    onClick: syncRootDirectory,
    label: "Sync",
  },
  settings: {
    icon: "settings",
    href: "/settings" as Route,
    label: "Settings",
  },
};

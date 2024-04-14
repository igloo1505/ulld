import Link from "next/link";
import React from "react";
import type { SidebarLink } from "@ulld/configschema/types";
import clsx from "clsx";
import { DynamicIcon } from "@ulld/icons/dynamic";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  item: SidebarLink;
}

export const SidebarButton = ({ item }: SidebarButtonProps) => {
  if (!item || (!item.Icon && !item.icon)) return null;
  const pathname = usePathname();
  const active = pathname === item.href;
  const Icon = item.Icon;

  if (item.onClick) {
    return (
      <a
        onClick={item.onClick}
        className="cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-opacity-10 dark:bg-gray-950 dark:hover:bg-gray-700 border border-transparent text-primary-foreground/80 dark:text-gray-50 dark:fill-gray-50 hover:text-primary-foreground hover:dark:text-foreground fill-primary-foreground/80 hover:fill-primary-foreground hover:dark:fill-foreground"
      >
        {typeof item?.icon === "string" && (
          <DynamicIcon className={"w-6 h-6"} name={item.icon} />
        )}
        {Icon && typeof item.icon !== "string" && (
          <Icon className={"w-6 h-6"} />
        )}
      </a>
    );
  }

  if (!item.href) return null;

  return (
    <Link
      href={item.href}
      className={clsx(
        "cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-opacity-10 dark:bg-gray-950 dark:hover:bg-gray-700 border border-transparent text-primary-foreground/80 dark:text-gray-50 dark:fill-gray-50 hover:text-primary-foreground hover:dark:text-foreground fill-primary-foreground/80 hover:fill-primary-foreground hover:dark:fill-foreground",
        active && "border-primary-foreground border-opacity-50",
      )}
    >
      {typeof item?.icon === "string" && (
        <DynamicIcon className={"w-6 h-6"} name={item.icon} />
      )}
      {Icon && typeof item.icon !== "string" && <Icon className={"w-6 h-6"} />}
    </Link>
  );
};

SidebarButton.displayName = "SidebarButton";

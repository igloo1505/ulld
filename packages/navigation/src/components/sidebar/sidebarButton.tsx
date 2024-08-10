"use client"
import Link from "next/link";
import type { SidebarLink } from "@ulld/configschema/types";
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
        className={"cursor-pointer p-1.5 focus:outline-none rounded-lg transition-colors duration-200 bg-primary text-primary-foreground stroke-primary-foreground dark:bg-card hover:bg-muted/20 hover:dark:bg-muted"}
      >
        {typeof item?.icon === "string" && (
          <DynamicIcon className={"w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"} name={item.icon} />
        )}
        {Icon && typeof item.icon !== "string" && (
          <Icon className={"w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"} />
        )}
      </a>
    );
  }

  if (!item.href) return null;

  return (
    <Link
      href={item.href}
        className={"cursor-pointer p-1.5 focus:outline-none rounded-lg transition-colors duration-200 bg-primary text-primary-foreground dark:bg-card hover:bg-muted/20 hover:dark:bg-muted"}
    >
      {typeof item?.icon === "string" && (
        <DynamicIcon className={"w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"} name={item.icon} />
      )}
      {Icon && typeof item.icon !== "string" && <Icon className={"w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"} />}
    </Link>
  );
};

SidebarButton.displayName = "SidebarButton";

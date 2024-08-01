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
        /* className="cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-opacity-10 dark:bg-gray-950 dark:hover:bg-gray-700 border border-transparent text-primary-foreground/80 dark:text-gray-50 dark:fill-gray-50 hover:text-primary-foreground dark:hover:text-foreground fill-primary-foreground/80 hover:fill-primary-foreground dark:hover:fill-foreground" */
        className={"cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg bg-card text-primary-foreground fill-primary-foreground dark:text-card-foreground dark:fill-card-foreground hover:bg-primary/80 hover:dark:bg-muted hover:dark:text-muted-foreground hover:dark:fill-muted-foreground"}
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
      /* className={clsx( */
      /*   "cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-opacity-10 dark:bg-gray-950 dark:hover:bg-gray-700 border border-transparent text-primary-foreground/80 dark:text-gray-50 dark:fill-gray-50 hover:text-primary-foreground dark:hover:text-foreground fill-primary-foreground/80 hover:fill-primary-foreground dark:hover:fill-foreground", */
      /*   active && "border-primary-foreground border-opacity-50", */
      /* )} */
        className={"cursor-pointer p-1.5 focus:outline-none transition-colors duration-200 rounded-lg bg-card text-primary-foreground fill-primary-foreground dark:text-card-foreground dark:fill-card-foreground hover:bg-primary/80 hover:dark:bg-muted hover:dark:text-muted-foreground hover:dark:fill-muted-foreground"}
    >
      {typeof item?.icon === "string" && (
        <DynamicIcon className={"w-6 h-6"} name={item.icon} />
      )}
      {Icon && typeof item.icon !== "string" && <Icon className={"w-6 h-6"} />}
    </Link>
  );
};

SidebarButton.displayName = "SidebarButton";

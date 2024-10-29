"use client";
import Link from "next/link";
import { DynamicIcon } from "@ulld/icons/dynamic";
import { usePathname } from "next/navigation";
import type { HTMLProps, ReactNode } from "react";
import { runActionById } from "@ulld/state/runActionById";
import type { InternalGlobalActionIds } from "@ulld/types";
import { cn } from "@ulld/utilities/cn";
import type { NavigationFormSettingSchema } from "../../pages/settingPage/form/schema";

interface SidebarButtonProps {
    item: NavigationFormSettingSchema["sidebarLinks"][number];
}


export const SidebarButton = ({ item }: SidebarButtonProps): ReactNode => {
    const pathname = usePathname();
    const active = item.fieldType === "url" ? pathname === item.value : false;

    if (item.fieldType === "action") {
        return (
            <button
                className="cursor-pointer p-1.5 focus:outline-none rounded-lg transition-colors duration-200 bg-primary text-primary-foreground stroke-primary-foreground dark:bg-card hover:bg-muted/20 hover:dark:bg-muted"
                onClick={() => {
                    runActionById(item.value as InternalGlobalActionIds).catch(() => {
                        // eslint-disable-next-line no-console -- Need to log error.. #MoveToLoggerPackage
                        console.error(`unable to run action with id ${item.value}`);
                    });
                }}
                type="button"
            >
                <DynamicIcon
                    className="w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"
                    name={item.icon}
                />
            </button>
        );
    }

    return (
        <Link
            className={cn("cursor-pointer p-1.5 focus:outline-none rounded-lg transition-colors duration-200 bg-primary text-primary-foreground dark:bg-card hover:bg-muted/20 hover:dark:bg-muted", active && "bg-muted/20 dark:bg-muted")}
            href={item.value}
        >
            <DynamicIcon
                className="w-6 h-6 text-primary-foreground dark:text-card-foreground stroke-primary-foreground dark:stroke-card-foreground"
                name={item.icon}
            />
        </Link>
    );
};

SidebarButton.displayName = "SidebarButton";

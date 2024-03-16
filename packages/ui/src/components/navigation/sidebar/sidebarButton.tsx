import Link from "next/link"
import React from 'react'
/* import { usePathname } from "next/navigation" */
import { SidebarLink } from "./types"
import clsx from "clsx"
import { DynamicIcon } from "../../icons/DynamicIcon"


interface SidebarButtonProps {
    item: SidebarLink
}


export const SidebarButton = ({ item }: SidebarButtonProps) => {
    /* const pathname = usePathname() */
    const pathname = "/"
    const active = pathname === item.href
    const { Icon } = item

    if (item.onClick) {
        return (
            <a onClick={item.onClick} className="cursor-pointer p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-opacity-10 hover:bg-white bg-primary dark:bg-gray-950 dark:hover:bg-gray-700 text-primary-foreground">
                {typeof Icon === "string" ? <DynamicIcon name={Icon} /> : <Icon className={"w-6 h-6"} />}
            </a>
        )
    }

    if (!item.href) return null

    return (
        <Link href={item.href} className={clsx("cursor-pointer p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-opacity-10 hover:bg-white bg-primary dark:bg-gray-950 dark:hover:bg-gray-700 text-primary-foreground fill-primary-foreground border border-transparent hover:text-white dark:text-foreground", active && "border-primary-foreground border-opacity-50")}>
            {typeof Icon === "string" ? <DynamicIcon name={Icon} /> : <Icon className={"w-6 h-6"} />}
        </Link>
    )
}


SidebarButton.displayName = "SidebarButton"

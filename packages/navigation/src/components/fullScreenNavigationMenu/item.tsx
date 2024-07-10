"use client"
import React from 'react'
import { Route } from 'next'
import Link from 'next/link'
import { Badge } from '@ulld/tailwind/badge'
import { makeHref, withForwardSlash } from '@ulld/utilities/fsUtils'



export interface NavItem {
    label: string
    totalNotes?: number
    url: Route
    forceLink?: boolean
}

interface FullScreenNavigationItemProps {
    item: NavItem
    backOnClick?: boolean
}

const FullScreenNavigationItem = ({ item, backOnClick }: FullScreenNavigationItemProps) => {
    if (!item.label) return null
    if (item.forceLink && !backOnClick) {
        return (
            <Link
                href={item.url}
                className={"flex flex-row w-full justify-center md:justify-start items-center px-4 py-3 rounded-md hover:bg-muted transition-all duration-200"}
            >
                <div
                    className={""}
                >
                    {item.label}
                </div>
                {typeof item.totalNotes === "number" && <Badge
                    className={"ml-[0.15rem]"}
                    style={{
                        padding: "0px 2px !important",
                        transform: "translateY(-8px)"
                    }}
                >{item.totalNotes}</Badge>}
            </Link>
        )
    }
    return (
        <a
            href={backOnClick ? undefined : item.url}
            role={backOnClick ? "button" : undefined}
            onClick={() => {
                if (backOnClick) {
                    window.location.href = makeHref(`${window.location.host}${withForwardSlash(item.url)}`)
                }
            }}
            className={"flex flex-row w-full justify-center md:justify-start items-center px-4 py-3 rounded-md hover:bg-muted transition-all duration-200"}
        >
            <div
                className={""}
            >
                {item.label}
            </div>
            {typeof item.totalNotes === "number" && <Badge
                className={"ml-[0.15rem]"}
                style={{
                    padding: "0px 2px !important",
                    transform: "translateY(-8px)"
                }}
            >{item.totalNotes}</Badge>}
        </a>
    )
}


FullScreenNavigationItem.displayName = "FullScreenNavigationItem"


export default FullScreenNavigationItem;

"use client"
import { Route } from 'next';
import Link from 'next/link';
import React, { useId } from 'react'
import clsx from 'clsx';
import { ComposedTooltip } from '../notifications/tooltip/tooltip';




export const A = (props: React.HTMLAttributes<HTMLAnchorElement> & { href?: Route | string, children?: any }) => {
    const id = useId()
    if (!props.href) {
        return <a {...props} />
    }


    /* NOTE: Add this back in if needed. Had to remove for now because of SSR and the window not being available even in a client component, but add it back in if it's needed in a useEffect and useState hook: ...(props.href....!regex.test(props.href)) { */
    /* let regex = new RegExp(`^http(s)?:\/\/(www\.)?${window.location.host}`, "gm") */

    let _props = {
        ...props,
        ...((!props.href.startsWith("/") && !props.href.startsWith("#")) && {
            target: "_blank",
            rel: "noopener noreferrer"
        })

    } as Omit<typeof props, "href"> & { href: Route, target?: string, rel?: string }
    const isTagLink = _props.children?.type === "strong" && typeof _props.children?.props?.children === "string" && _props.children?.props?.children?.startsWith("@")
    if (isTagLink) {
        return <Link className={clsx("cursor-pointer rounded-sm px-1 text-blue-500 dark:text-blue-400", isTagLink && "tag-link")} id={id} {..._props} />
    }
    return (
        <ComposedTooltip content={props.href} disable={isTagLink}>
            <Link className={clsx("embeddedLink cursor-pointer rounded-sm px-1 text-blue-500 dark:text-blue-400", isTagLink && "tag-link")} {..._props} id={id} />
        </ComposedTooltip>
    )
}


A.displayName = "A"

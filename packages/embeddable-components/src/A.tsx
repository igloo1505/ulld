"use client";
import { Route } from "next";
import Link from "next/link";
import React, { useEffect, useId, useState } from "react";
import { ComposedTooltip } from "./emeddedComponents/composedTooltip";

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
    href?: Route | string;
    children?: any;
};

const shouldIgnoreTooltip = (
    props: Props & any,
): { isTag: boolean; ignore: boolean } => {
    const isTag =
        props.children?.type === "strong" &&
        typeof props.children?.props?.children === "string" &&
        props.children?.props?.children?.startsWith("@");
    const otherIgnore = props["data-footnote-ref"] || props["data-footnote-backref"]
    return {
        ignore: isTag || props.children?.classList?.includes("no-tooltip") || otherIgnore,
        isTag,
    };
};

export const A = (props: Props) => {
    console.log("props: ", props)
    const id = useId();
    const [ignoreTooltip, setIgnoreTooltip] = useState(
        shouldIgnoreTooltip(props),
    );

    useEffect(() => {
        setIgnoreTooltip(shouldIgnoreTooltip(props));
    }, [props]);

    if (!props.href) {
        return <a {...props} />;
    }

    /* NOTE: Add this back in if needed. Had to remove for now because of SSR and the window not being available even in a client component, but add it back in if it's needed in a useEffect and useState hook: ...(props.href....!regex.test(props.href)) { */
    /* let regex = new RegExp(`^http(s)?:\/\/(www\.)?${window.location.host}`, "gm") */

    let _props = {
        ...props,
        ...(!props.href.startsWith("/") &&
            !props.href.startsWith("#") && {
            target: "_blank",
            rel: "noopener noreferrer",
        }),
    } as Omit<typeof props, "href"> & {
        href: Route;
        target?: string;
        rel?: string;
    };
    if (ignoreTooltip.isTag) {
        return (
            <Link
                className={"cursor-pointer rounded-sm px-1 !text-link tag-link"}
                id={id}
                {..._props}
            />
        );
    }
    return (
        <ComposedTooltip content={props.href} disable={ignoreTooltip.ignore}>
            <Link
                className={"embeddedLink cursor-pointer rounded-sm px-1 !text-link"}
                {..._props}
                id={id}
            />
        </ComposedTooltip>
    );
};

A.displayName = "A";

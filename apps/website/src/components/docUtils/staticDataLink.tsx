import React, { ReactNode } from "react";
import Link from "next/link";
import staticData from "staticContent";

export interface StaticDataLinkProps {
    /** "links.funding.paypal" style syntax */
    link: string;
    children: ReactNode;
}

export const getStaticLink = (value: string, root: object = staticData): string => {
    const linkItems: string[] = value.split(".");
    let newVal = root[linkItems[0] as keyof typeof root];
    if (linkItems.length > 1) {
        return getStaticLink(linkItems.splice(1).join("."), newVal);
    }
    return newVal as string;
};

const StaticDataLink = ({ link, children }: StaticDataLinkProps) => {
    let href = getStaticLink(link);
    if (typeof href !== "string") {
        throw new Error(`StaticDataLink could not parse the link ${link}`);
    }
    return (
        <Link className={"text-link"} href={href}>
            {children}
        </Link>
    );
};

StaticDataLink.displayName = "StaticDataLink";

export default StaticDataLink;

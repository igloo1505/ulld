import React, { type HTMLProps, type ReactNode } from "react";
import { runActionById } from "@ulld/state/runActionById";
import type { LinkProps as Lp } from "next/link";
import Link from "next/link";
import type {
    NavbarLink,
    SidebarLink,
} from "../../pages/settingPage/form/schema";

type ButtonProps = Omit<HTMLProps<HTMLButtonElement>, "type" | "onClick">

type LinkProps = Omit<Lp, "href">

type IsomorphicNavLinkProps = {
    item: SidebarLink | NavbarLink;
    children: ReactNode;
} & (LinkProps | ButtonProps);

export const IsomorphicNavLink = ({
    item,
    children,
    ...props
}: IsomorphicNavLinkProps): ReactNode => {
    if (item.fieldType === "action") {
        return (
            <button
                onClick={() => {
                    runActionById(item.value).catch(() => {
                        // eslint-disable-next-line no-console -- Need to log error. #MoveToLoggerPackage
                        console.error(
                            `Failed to run action by id for action: ${item.value}`,
                        );
                    });
                }}
                type="button"
                {...props as ButtonProps}
            >
                {children}
            </button>
        );
    }
    return (
        <Link
            href={item.value}
            {...props as LinkProps}
        >
            {children}
        </Link>
    );
};

IsomorphicNavLink.displayName = "IsomorphicNavLink";

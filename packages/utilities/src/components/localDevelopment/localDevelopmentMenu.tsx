import React, { HTMLProps, ReactNode } from "react";
import Link from "next/link";

export interface LocalDevelopmentItem {
    href: string;
    label: ReactNode;
    props?: Omit<HTMLProps<HTMLAnchorElement>, "href">;
}

interface LocalDevelopmentMenuProps {
    items: LocalDevelopmentItem[];
}

const LocalDevelopmentMenu = ({ items }: LocalDevelopmentMenuProps) => {
    return (
        <div
            className={"grid"}
            style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
        >
            {items.map(({ href, label, ...itemProps }) => {
                return (
                    <Link
                            key={href}
                            href={href} {...itemProps}
                            className={"w-full h-[80px] rounded-lg bg-primary text-primary-foreground text-xl flex flex-col justify-center items-center"}
                        >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
};

LocalDevelopmentMenu.displayName = "LocalDevelopmentMenu";

export default LocalDevelopmentMenu;

import type { ReactNode } from "react";
import React from "react";
import type { NavItem } from "./item";
import FullScreenNavigationItem from "./item";
import FullScreenGroupHeading from "./heading";

interface FullScreenNavigationGroupProps {
    links: NavItem[];
    backOnClick?: boolean;
    label: string;
}

const FullScreenNavigationGroup = ({
    links,
    label,
    backOnClick,
}: FullScreenNavigationGroupProps): ReactNode => {
    const hideIcons = !links.some((x) => x.icon);
    return (
        <div
            className="w-full h-fit mt-6 md:mt-0 flex flex-col justify-start items-start @container/navigationGroup"
        >
            <FullScreenGroupHeading>{label}</FullScreenGroupHeading>
            <hr className="w-full my-2 bg-primary" />
            <div
                className="w-full grid grid-cols-1 @[400px]/navigationGroup:grid-cols-2 gap-x-2"
            >
                {links.map((d) => {
                    return (
                        <FullScreenNavigationItem
                            backOnClick={backOnClick}
                            hideIcons={hideIcons}
                            item={d}
                            key={`utility-link-${d.label}-${d.url}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

FullScreenNavigationGroup.displayName = "FullScreenNavigationGroup";

export default FullScreenNavigationGroup;

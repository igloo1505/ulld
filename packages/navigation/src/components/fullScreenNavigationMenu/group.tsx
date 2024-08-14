import React from "react";
import FullScreenNavigationItem, { NavItem } from "./item";
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
}: FullScreenNavigationGroupProps) => {
    const hideIcons = !links.some((x) => x.icon);
    return (
        <div
            className={
                "w-full h-fit mt-6 md:mt-0 flex flex-col justify-start items-start @container/navigationGroup"
            }
        >
            <FullScreenGroupHeading>{label}</FullScreenGroupHeading>
            <hr className={"w-full my-2 bg-primary"} />
            <div
                className={
                    "w-full grid grid-cols-1 @[400px]/navigationGroup:grid-cols-2 gap-x-2"
                }
            >
                {links.map((d, i) => {
                    return (
                        <FullScreenNavigationItem
                            backOnClick={backOnClick}
                            key={`utility-link-${i}`}
                            item={d}
                            hideIcons={hideIcons}
                        />
                    );
                })}
            </div>
        </div>
    );
};

FullScreenNavigationGroup.displayName = "FullScreenNavigationGroup";

export default FullScreenNavigationGroup;

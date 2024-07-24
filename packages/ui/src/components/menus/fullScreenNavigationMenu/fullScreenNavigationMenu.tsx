import React from "react";
import type { Route } from "next";
import FullScreenNavigationGroup from "./fullScreenNavigationGroup";
import { formatLocationData } from "@ulld/state/formatting/formatLocationData";
import { NoteTypeOverview } from "@ulld/state/formatting/formatLocationDataZodSchema";
import { ClientSideXIcon } from "@ulld/icons/clientX";
import { utilityNavLinks } from "@ulld/utilities/utilNavLinks";
import { FullScreenNavItem } from "@ulld/types";

interface FullScreenNavigationMenuProps {
    backOnClick?: boolean;
    isPopupState?: boolean;
}

/* CONFIG: Move these buttons to a global object, and have the user set keys of that object in their appConfig. */
/* SETTINGS: This is important to add to settings as well, to be adjusted without a rebuild. */

const healthLinks: FullScreenNavItem[] = [
    {
        label: "Dashboard",
        url: "/health/dashboard",
    },
    {
        label: "Health Reports",
        url: "/health/reporting/view",
    },
    {
        label: "Add Health Report",
        url: "/health/reporting/add",
    },
    {
        label: "Add Diet",
        url: "/health/diet/add",
    },
    {
        label: "View/Edit Diets",
        url: "/health/diet/view",
    },
];

export const FullScreenNavigationMenu = async ({
    backOnClick,
    isPopupState,
}: FullScreenNavigationMenuProps) => {
    let data: NoteTypeOverview[] = await formatLocationData();
    const columns = 2; // Come back and make this part of state that's responsive to viewport width eventually. Hardcoding it for now.
    const sources: {
        items: FullScreenNavItem[];
        label: string;
    }[] = [
            {
                /* BUG: Come back and fix this. Added label property as a required prop and never passed added it to existing items. */
                /* @ts-ignore */
                items: data as (Omit<NoteTypeOverview, "url"> & { url: Route })[],
                label: "Notes",
            },
            {
                items: utilityNavLinks,
                label: "Utility",
            },
            /* , { */
            /*     items: healthLinks, */
            /*     label: "Health" */
            /* } */
        ];

    const li = sources.length - (sources.length % columns);
    const lo = sources.slice(li, sources.length);

    return (
        <div
            className={
                "w-full bg-background min-h-screen pb-8 pt-4 px-[8%] flex flex-col justify-start items-start gap-3 md:gap-6 relative"
            }
        >
            {isPopupState && (
                <ClientSideXIcon
                    className={"absolute top-4 right-4"}
                    backOnClick={backOnClick}
                />
            )}
            <div
                className={
                    "w-full flex flex-col justify-start items-start gap-3 md:grid md:grid-cols-[1fr_1fr] md:gap-6"
                }
            >
                {sources.slice(0, li).map((d, i) => {
                    return (
                        <FullScreenNavigationGroup
                            key={`left-over-${i}`}
                            links={d.items}
                            label={d.label}
                        />
                    );
                })}
            </div>
            <div
                className={
                    "w-full flex flex-col justify-start items-start gap-3 md:grid"
                }
                style={{
                    gridTemplateColumns: `repeat(${lo.length}, 1fr)`,
                }}
            >
                {lo.map((d, i) => {
                    return (
                        <FullScreenNavigationGroup
                            key={`left-over-${i}`}
                            links={d.items}
                            label={d.label}
                        />
                    );
                })}
            </div>
        </div>
    );
};

FullScreenNavigationMenu.displayName = "FullScreenNavigationMenu";

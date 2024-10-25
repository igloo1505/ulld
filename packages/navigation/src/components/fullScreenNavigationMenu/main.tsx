import type { ReactNode } from "react";
import React from "react";
import { ClientSideXIcon } from "@ulld/icons/clientX";
import type { ValidIconName } from "@ulld/types";
import type { FullScreenNavProps } from "../../types";
import FullScreenNavigationGroup from "./group";

type FullScreenNavigationMenuProps = FullScreenNavProps


/* TODO: Create a trpc method to pass in an array of DocType strings and return a Record<DocTypeString, number> where number is the number of total notes of that type. */
const FullScreenNavigationMenu = ({
    isModal,
    items,
    noteTypes,
}: FullScreenNavigationMenuProps): ReactNode => {

    return (
        <div
            className="w-full bg-background min-h-screen pb-8 pt-4 px-[8%] flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-6 relative"
        >
            {isModal ? <ClientSideXIcon
                    backOnClick
                    className="absolute top-4 right-4"
                /> : null}
            <div
                className="w-full flex flex-col justify-start items-start gap-3 md:gap-6"
            >
                <FullScreenNavigationGroup
                    key="left-over-1"
                    label="Notes"
                    links={noteTypes.map((p) => ({
                        label: p.label,
                        url: p.url,
                        id: p.id,
                        icon: p.icon as ValidIconName
                    }))}
                />
            </div>
            <div
                className="w-full flex flex-col justify-start items-start gap-3 md:gap-6"
                /* style={{ */
                /*     gridTemplateColumns: `repeat(${items.length}, 1fr)`, */
                /* }} */
            >
                <FullScreenNavigationGroup
                    key="left-over-2"
                    label="Utility"
                    links={items.map((p) => ({
                        label: p.label,
                        url: p.href,
                    }))}
                />
            </div>
        </div>
    );
};

FullScreenNavigationMenu.displayName = "FullScreenNavigationMenu";

export default FullScreenNavigationMenu;

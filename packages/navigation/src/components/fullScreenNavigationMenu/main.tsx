import React from "react";
import { FullScreenNavProps } from "../../types";
import { ClientSideXIcon } from "@ulld/icons/clientX";
import FullScreenNavigationGroup from "./group";

interface FullScreenNavigationMenuProps extends FullScreenNavProps { }

/* export const utilityNavLinks: NavItem[] = [ */
/* { */
/*     label: "Flip Cards", */
/*     url: "/flipCard" */
/* }, */
/* { */
/*     label: "Add Flip Card", */
/*     url: "/flipCard/add" */
/* }, */
/* { */
/*     label: "Practice Exam", */
/*     url: "/practiceExam" */
/* }, */
/* { */
/*     label: "Calendar", */
/*     url: "/calendar?past=true" */
/* }, */
/* { */
/*     label: "Value Search", */
/*     url: "/valueTable?fixed=5" */
/* }, */
/* ] */

/* TODO: Create a trpc method to pass in an array of DocType strings and return a Record<DocTypeString, number> where number is the number of total notes of that type. */
const FullScreenNavigationMenu = ({
    isModal,
    items,
    noteTypes,
}: FullScreenNavigationMenuProps) => {

    return (
        <div
            className={
                "w-full bg-background min-h-screen pb-8 pt-4 px-[8%] flex flex-col lg:flex-row justify-start items-start gap-3 md:gap-6 relative"
            }
        >
            {isModal && (
                <ClientSideXIcon
                    className={"absolute top-4 right-4"}
                    backOnClick={true}
                />
            )}
            <div
                className={
                    "w-full flex flex-col justify-start items-start gap-3 md:gap-6"
                }
            >
                <FullScreenNavigationGroup
                    key={`left-over-1`}
                    links={noteTypes.map((p) => ({
                        label: p.label,
                        url: p.url,
                        id: p.id,
                        icon: p.icon
                    }))}
                    label="Notes"
                />
            </div>
            <div
                className={
                    "w-full flex flex-col justify-start items-start gap-3 md:gap-6"
                }
                /* style={{ */
                /*     gridTemplateColumns: `repeat(${items.length}, 1fr)`, */
                /* }} */
            >
                <FullScreenNavigationGroup
                    key={`left-over-2`}
                    links={items.map((p) => ({
                        label: p.label,
                        url: p.href,
                    }))}
                    label="Utility"
                />
            </div>
        </div>
    );
};

FullScreenNavigationMenu.displayName = "FullScreenNavigationMenu";

export default FullScreenNavigationMenu;

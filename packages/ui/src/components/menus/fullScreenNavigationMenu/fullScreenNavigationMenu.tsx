import React from 'react'
import type { Route } from 'next'
import { NavItem } from './fullScreenNavigationItem'
import FullScreenNavigationGroup from './fullScreenNavigationGroup'
import { formatLocationData, NoteTypeOverview } from '@ulld/state'



interface FullScreenNavigationMenuProps {
    backOnClick?: boolean
    isPopupState?: boolean
}


/* CONFIG: Move these buttons to a global object, and have the user set keys of that object in their appConfig. */
/* SETTINGS: This is important to add to settings as well, to be adjusted without a rebuild. */
export const utilityNavLinks: NavItem[] = [
    {
        label: "Snippets",
        url: "/snippets"
    },
    {
        label: "Add Snippet",
        url: "/snippets/add"
    },
    {
        label: "Flip Cards",
        url: "/flipCard"
    },
    {
        label: "Add Flip Card",
        url: "/flipCard/add"
    },
    {
        label: "Equations",
        url: "/equations"
    },
    {
        label: "Add Equation",
        url: "/equations/add"
    },
    {
        label: "Boards",
        url: "/boards"
    },
    {
        label: "Add Board",
        url: "/boards/create"
    },
    {
        label: "Create To Do list",
        url: "/todo/add/list",
        forceLink: true
    },
    {
        label: "To Do's",
        url: "/todo"
    },
    {
        label: "Practice Exam",
        url: "/practiceExam"
    },
    {
        label: "Bibliography",
        url: "/bibliography"
    },
    {
        label: "Calendar",
        url: "/calendar?past=true"
    },
    {
        label: "Notebooks",
        url: "/notebooks"
    },
    {
        label: "Value Search",
        url: "/valueTable?fixed=5"
    },
    {
        label: "Settings",
        url: "/settings"
    },
    {
        label: "Auto-Property Settings",
        url: "/settings/autoSettings"
    },
    {
        label: "Dictionary",
        url: "/dictionary" as Route
    },
]


const healthLinks: NavItem[] = [
    {
        label: "Dashboard",
        url: "/health/dashboard"
    },
    {
        label: "Health Reports",
        url: "/health/reporting/view"
    },
    {
        label: "Add Health Report",
        url: "/health/reporting/add"
    },
    {
        label: "Add Diet",
        url: "/health/diet/add"
    },
    {
        label: "View/Edit Diets",
        url: "/health/diet/view"
    },
]

const FullScreenNavigationMenu = async ({ backOnClick, isPopupState }: FullScreenNavigationMenuProps) => {
    let data: NoteTypeOverview[] = await formatLocationData()
    const columns = 2 // Come back and make this part of state that's responsive to viewport width eventually. Hardcoding it for now.
    const sources: {
        items: NavItem[]
        label: string
    }[] = [
            {
                items: data as (Omit<NoteTypeOverview, "url"> & { url: Route })[],
                label: "Notes"
            }, {
                items: utilityNavLinks,
                label: "Utility"
            }, {
                items: healthLinks,
                label: "Health"
            }
        ]

    const li = sources.length - (sources.length % columns)
    const lo = sources.slice(li, sources.length)

    return (
        <div className={"w-full bg-background min-h-screen pb-8 pt-4 px-[8%] flex flex-col justify-start items-start gap-3 md:gap-6 relative"}>
            {isPopupState && <ClientSideXIcon
                className={"absolute top-4 right-4"}
                backOnClick={backOnClick}
            />}
            <div className={"w-full flex flex-col justify-start items-start gap-3 md:grid md:grid-cols-[1fr_1fr] md:gap-6"}>
                {sources.slice(0, li).map((d, i) => {
                    return (
                        <FullScreenNavigationGroup
                            key={`left-over-${i}`}
                            links={d.items}
                            label={d.label}
                        />
                    )
                })}
            </div>
            <div
                className={"w-full flex flex-col justify-start items-start gap-3 md:grid"}
                style={{
                    gridTemplateColumns: `repeat(${lo.length}, 1fr)`
                }}
            >
                {lo.map((d, i) => {
                    return (
                        <FullScreenNavigationGroup
                            key={`left-over-${i}`}
                            links={d.items}
                            label={d.label}
                        />
                    )
                })}
            </div>
        </div>
    )
}


FullScreenNavigationMenu.displayName = "FullScreenNavigationMenu"


export default FullScreenNavigationMenu;

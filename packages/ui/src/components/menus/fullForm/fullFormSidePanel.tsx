import React, { useContext } from "react";
import { FullFormContext, FullFormDispatchContext } from "./fullFormContext";
import clsx from "clsx";

interface FullFormSidePanelProps {
    items: string[];
}

const FullFormSidePanel = ({ items }: FullFormSidePanelProps) => {
    const ctx = useContext(FullFormContext)
    const dispatch = useContext(FullFormDispatchContext)

    const setActive = (s: string) => {
        console.log("dispatch: ", dispatch)
        dispatch && dispatch({
            type: "setActiveAside",
            payload: s
        })
    }
    return (
        <aside className="-mx-4 lg:w-1/5">
            <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                {items.map((item) => {
                    return (<a
                        key={item}
                        role="button"
                        className={clsx(ctx.activeAside === item ? "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start" : "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start")}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </a>

                    )
                })}
            </nav>
        </aside>
    );
};

FullFormSidePanel.displayName = "FullFormSidePanel";

export default FullFormSidePanel;

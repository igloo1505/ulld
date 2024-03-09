import clsx from 'clsx'
import React from 'react'



interface ResizePanelProps {
    min?: number
    max?: number
    children: React.ReactNode
}

/* TODO: These min and max values were left in for use later. They're already being grabbed and parsed properly by the manager class but they haven't been implemented in the way the widths are calculated yet. Handle that at some point, but it's on the backburner for now. */
/* _DISABLED: I literally just realized where the term 'backburner' comes from lol. */

export const ResizePanel = ({ min, max, children }: ResizePanelProps) => {
    return (
        <div className={clsx(`resizePanel p-4 h-full w-full opacity-0`, typeof min === "number" && `rp-min-${min}`, typeof max === "number" && `rp-max-${max}`)}>
            {children}
        </div>
    )
}


ResizePanel.displayName = "ResizePanel"

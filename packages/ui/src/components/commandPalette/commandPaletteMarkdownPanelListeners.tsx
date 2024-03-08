"use client"
import React, { RefObject, useEffect } from 'react'



interface CommandPalettePanelListenersProps {
    scrollParent: RefObject<HTMLDivElement>
    scrollChild: RefObject<HTMLDivElement>
}

const CommandPalettePanelListeners = ({ scrollParent, scrollChild }: CommandPalettePanelListenersProps) => {

    const scroll = (dir: "down" | "up") => {
        let parentHeight = scrollParent.current?.getBoundingClientRect().height
        let scrollTop = scrollParent.current?.scrollTop
        let scrollHeight = scrollParent.current?.scrollHeight
        if (typeof parentHeight === "undefined" || typeof scrollTop === "undefined" || typeof scrollHeight === "undefined" || !scrollParent?.current) return
        let scrollDiff = dir === "down" ? Math.min(parentHeight * 0.33, scrollHeight - parentHeight - scrollTop) : Math.min(parentHeight * 0.33, scrollTop)
        scrollParent.current.scrollTop = dir === "down" ? scrollTop + scrollDiff : scrollTop - scrollDiff
    }


    const keyboardListener = (e: KeyboardEvent) => {
        if (e.key === "d" && e.ctrlKey) {
            e.preventDefault()
            scroll("down")
        } else if (e.key === "u" && e.ctrlKey) {
            e.preventDefault()
            scroll("up")
        }
    }

    useEffect(() => {
        let em = document.getElementById("cmd-palette-input-parent")?.querySelector("input")
        if (em) {
            em.addEventListener("keydown", keyboardListener)
        }
        return () => {
            em?.removeEventListener("keydown", keyboardListener)
        }
    }, [])
    return (
        <div></div>
    )
}


CommandPalettePanelListeners.displayName = "CommandPalettePanelListeners"


export default CommandPalettePanelListeners;

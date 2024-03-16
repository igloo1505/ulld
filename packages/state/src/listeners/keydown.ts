import { KeyboardEventHandler, KeyboardEvent } from "react"
import { copyStringToClipboard } from "@ulld/utilities/actions"
import { toggleSidebar } from "../actions"

export const keyDown: KeyboardEventHandler = (e) => {
    if (e.code === "KeyB" && e.ctrlKey) {
        toggleSidebar()
    }
}



export const onEnter = (e: KeyboardEvent<HTMLInputElement>, callback: (e: KeyboardEvent<HTMLInputElement>) => void, ignore?: "all" | "onEnter") => {
    if (ignore === "all") {
        e.preventDefault()
        e.stopPropagation()
    }
    if (e.key === "Enter") {
        if (ignore === "onEnter") {
            e.preventDefault()
            e.stopPropagation()
        }
        callback(e)
    }
}


export const numberInputOnly = <T extends boolean>(e: KeyboardEvent<HTMLInputElement>, withEnter: T, enterCallback: T extends true ? (e: KeyboardEvent) => void : null) => {
    if ([37, 39, 16, 17, 18, 91, 93, 8].includes(e.keyCode) || /\d/gm.test(e.key) || e.key === ".") {
        return e
    }
    e.preventDefault()
    e.stopPropagation()
    return withEnter === true ? onEnter(e, enterCallback as (e: KeyboardEvent) => void) : false
}



// TODO: Come back and add vim like motions as well when a special key is held
export const onIndexChange = (e: KeyboardEvent<HTMLInputElement>, callback: (e: KeyboardEvent<HTMLInputElement>, dir: 1 | -1 | 0, select: boolean) => void) => {
    console.log("e.key: ", e.key)
    if (e.key === "Tab") {
        e.preventDefault()
        e.stopPropagation()
        callback(e, e.shiftKey ? -1 : 1, false)
    }
    if (e.key === "ArrowRight" && e.shiftKey) {
        e.preventDefault()
        e.stopPropagation()
        callback(e, 1, false)
    }
    if (e.key === "ArrowLeft" && e.shiftKey) {
        e.preventDefault()
        e.stopPropagation()
        callback(e, -1, false)
    }
    if (e.key === "Enter") {
        e.preventDefault()
        e.stopPropagation()
        callback(e, 0, true)
    }
}


export const createCopyListener = <T extends unknown>(copyText: string, onCopy?: (e: T) => void) => {
    return async (e: T) => {
        await copyStringToClipboard(copyText)
        onCopy && onCopy(e)
    }
}

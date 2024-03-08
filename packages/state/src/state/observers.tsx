"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { RootState, store, setConfigState, setLocalSettings, setDarkmode, showNoteSheet } from "."
import { connect } from "react-redux"
import { StatePassedToClient } from "./types/general"
import { resize } from "../listeners/resize"
import { keyDown } from "../listeners/keydown"
import { setInitialBrowserProps } from "../actions/clientOnly/dom"



const connector = connect((state: RootState, props: any) => ({
    sidebarOpen: state.UI.sidebar.open,
    noteSheetOpen: state.UI.panels.noteSheet,
    props: props
}))



interface ListenerType {
    event: "resize" | "keydown" | "scroll"
    function: any
    target: "window" | "document"
    call?: boolean
}

const listenerMap: ListenerType[] = [
    {
        event: "resize",
        function: resize,
        target: "window",
        call: true,
    },
    {
        event: "keydown",
        function: keyDown,
        target: "document",
    }
]





const Observers = connector(({ settings, darkMode, noteSheetOpen, config }: StatePassedToClient & { noteSheetOpen: boolean }) => {
    const pathname = usePathname()

    useEffect(() => {
        setInitialBrowserProps()
    }, [])

    useEffect(() => {
        if (config) {
            store.dispatch(setConfigState(config))
        }
    }, [config])

    useEffect(() => {
        if (!settings) {
            return console.log("No settings object returned from postgres")
        }
        if (settings) {
            store.dispatch(setLocalSettings(settings))
        }
        /* TODO: Find that bulk dispatch function and use it throught the app in places like this to hopefully slightly increase this dreadful performance. */
        store.dispatch(setDarkmode(darkMode))
    }, [settings, darkMode])


    /* TODO: Move this to the keydown listener that already exists instead of appending here. Leaving for now because I have to fix a bug and the library closes in 13 minutes. */
    const keymapListener = (e: KeyboardEvent) => {
        if (e.code === 'KeyK' && e.metaKey) {
            store.dispatch(showNoteSheet(!noteSheetOpen))
        }
    }


    useEffect(() => {
        window.addEventListener("keydown", keymapListener)
        return () => window.removeEventListener("keydown", keymapListener)
    }, [])

    useEffect(() => {
        if (pathname === "/") {
            document.body.classList.add("noScroll")
        } else {
            document.body.classList.remove("noScroll")
        }
    }, [pathname])


    useEffect(() => {
        listenerMap.forEach((l) => {
            if (l.target === "window") {
                window.addEventListener(l.event, l.function)
            }
            if (l.target === "document") {
                document.addEventListener(l.event, l.function)
            }
            if (l.call) {
                l.function()
            }
        })
        return () => {
            listenerMap.forEach((l) => {
                if (l.target === "window") {
                    window.removeEventListener(l.event, l.function)
                }
                if (l.target === "document") {
                    document.removeEventListener(l.event, l.function)
                }
            })
        }
    }, [])
    return null
})


Observers.displayName = "Observers"


export default Observers;

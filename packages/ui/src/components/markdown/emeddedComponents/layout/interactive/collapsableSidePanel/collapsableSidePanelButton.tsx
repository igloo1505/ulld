"use client"
import clsx from 'clsx'
import React, { useEffect, useMemo } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { connect } from 'react-redux'
import { DynamicIcon } from '../../../../../icons/DynamicIcon'
import { toggleEmbeddedPanelState, addEmbededPanelState } from '@ulld/state/slices/ui'
import { store, RootState } from '@ulld/state/store'
import { initialState } from '@ulld/state/initialState'



interface CollapsableSidePanelBtnProps {
    id: string
    dir: "left" | "right"
    width: number
    initialOpen: boolean
    panels: typeof initialState.UI.panels.embededPanels
}


const connector = connect((state: RootState, props: any) => ({
    panels: state.UI.panels.embededPanels,
    props: props
}))

const CollapsableSidePanelBtn = connector(({ dir, initialOpen, width, id, panels }: CollapsableSidePanelBtnProps) => {
    const pathname = usePathname()
    let getEm = () => {
        if (typeof window === "undefined") return;
        return document.getElementById(id)
    }
    const iconName = useMemo(() => dir === "left" ? "arrow-right-from-line" : "arrow-left-from-line", [dir])

    const getWindowPadding = () => {
        let em = getEm()
        let parent = em?.parentElement?.getBoundingClientRect()
        if (!parent) return
        let paddingRight = window.innerWidth - parent.x - parent.width
        let paddingLeft = parent.x
        return {
            left: paddingLeft,
            right: paddingRight
        }
    }

    const isOpen = () => {
        let em = getEm()
        return em ? em.classList.contains("open") : false
    }

    const handleResize = () => {
        const left = dir === "left"
        let em = getEm()
        let padding = getWindowPadding()
        if (!padding || !em) return
        let _open = em?.classList.contains("open")
        if (_open) {
            let w = Math.min(window.innerWidth, width)
            gsap.to(`div[id='${id}']`, {
                width: `${w}px`,
                x: 0,
                duration: 0,
                immediateRender: true
            })
        } else {
            let rect = em.getBoundingClientRect()
            gsap.to(`div[id='${id}']`, {
                width: 0,
                x: left ? `-${padding.left + rect.width}px` : `${padding.right + 34}px`,
                duration: 0,
                immediateRender: true
            })
        }
    }

    const handlePosition = () => {
        if (typeof window === "undefined") return;
        let w = Math.min(window.innerWidth, width)
        let left = dir === "left"
        let padding = getWindowPadding()
        let em = getEm()
        if (!padding || !em) return
        let open = isOpen()
        if (panels[id]?.open === open) return
        if (typeof panels[id]?.open === "undefined" ? initialOpen : panels[id].open) {
            em.classList.add("open")
            gsap.fromTo(`div[id='${id}']`, {
                width: 0,
                x: left ? `-${padding.left + 34}px` : `${padding.right + 34}px`
            }, {
                width: `${w}px`,
                x: 0
            })
        } else {
            em.classList.remove("open")
            gsap.fromTo(`div[id='${id}']`, {
                width: `${w}px`,
                x: 0
            }, {
                width: 0,
                x: left ? `-${padding.left + 34}px` : `${padding.right + 34}px`
            })
        }
    }


    const togglePanel = () => {
        let em = document.getElementById(id)
        let open = isOpen()
        if (!em) return
        if (!open) {
            store.dispatch(toggleEmbeddedPanelState({ id: id, open: true }))
        } else {
            store.dispatch(toggleEmbeddedPanelState({ id: id, open: false }))
        }
    }


    useEffect(() => {
        if (typeof window === "undefined") return;
        store.dispatch(addEmbededPanelState({
            id: id,
            open: initialOpen,
            pathname: pathname
        }))
        window.addEventListener("resize", () => handleResize())
        return () => window.addEventListener("resize", () => handleResize())
    }, [])


    useEffect(() => {
        if (typeof window === "undefined") return;
        handlePosition()
    }, [panels])


    return (
        <div className={clsx("absolute top-3 w-8 h-8 collapsableSidePanelIcon flex justify-center items-center group-[.open]/collapsablesidepanel:rotate-180 transition-transform duration-300 delay-300 cursor-pointer", dir === "left" ? "right-0 translate-x-12 group-[.open]/collapsablesidepanel:-translate-x-2" : "left-0 -translate-x-12 group-[.open]/collapsablesidepanel:translate-x-2")}
            onClick={togglePanel}
        >
            <DynamicIcon
                name={iconName}
            />
        </div>
    )
})


CollapsableSidePanelBtn.displayName = "CollapsableSidePanelBtn"


export default CollapsableSidePanelBtn;

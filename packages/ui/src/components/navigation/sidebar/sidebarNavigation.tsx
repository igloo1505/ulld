"use client"
import React, { useEffect } from 'react'
import SidebarButton from './sidebarButton';
import { SettingsIcon } from 'lucide-react';
import { SidebarLink } from './types';
import { internalLinks } from './internalSidebarButtons';


const sidebarOnHover = true
const sidebarBreakpoint = 20


interface PermanentSidebarProps {
    sidebarLinks: SidebarLink[]
    bottomButtons?: SidebarLink[]
}

const defaultBottomButtons: PermanentSidebarProps["bottomButtons"] = [
    internalLinks.darkMode,
    internalLinks.sync,
    internalLinks.settings,
]



const PermanentSidebar = ({ sidebarLinks, bottomButtons = defaultBottomButtons }: PermanentSidebarProps) => {

    const hoverListener = (e: MouseEvent): void => {
        if (e.pageX <= sidebarBreakpoint) {
            document.body.classList.add("sidebarOpen")
        }
        if (e.pageX > 64) {
            document.body.classList.remove("sidebarOpen")
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", hoverListener)
        return () => {
            window.removeEventListener("mousemove", hoverListener)
        }
    }, [])

    return (
        <aside className={"fixed flex flex-col gap-6 items-center w-16 h-screen py-8 overflow-y-auto bg-primary text-primary-content border-r rtl:border-l rtl:border-r-0 dark:bg-gray-950 border-blue-300 dark:border-gray-700 top-0 left-0 -translate-x-full opacity-100 data-sidebar:translate-x-0 data-sidebar:opacity-100 z-[11] dark:text-gray-200"} id="sidebar-panel">
            <nav className="flex flex-col flex-1 space-y-6">
                {sidebarLinks.map((l, i) => <SidebarButton item={l} key={`sidebar-btn-${i}`} />)}
            </nav>
            <div className="flex flex-col space-y-6">
                {bottomButtons.map((b) => {
                    return <SidebarButton item={b} />
                })}
            </div>
        </aside>
    )
}


PermanentSidebar.displayName = "PermanentSidebar"


export default PermanentSidebar;

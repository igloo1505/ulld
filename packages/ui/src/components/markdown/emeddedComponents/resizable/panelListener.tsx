"use client"
import React, { useEffect } from 'react'
import {ResizePanelManager} from "@ulld/state/classes/ui/resizePanelHandler"



interface ResizeGroupListenerProps {
    containerId: string
}




const ResizeGroupListener = ({ containerId }: ResizeGroupListenerProps) => {
    let manager: ResizePanelManager = new ResizePanelManager(containerId)
    useEffect(() => {
        let em = document.getElementById(containerId)
        if (!em) return
        manager.setEm()
        manager.setInitialPanelProps()
        manager.appendDividers()
        window.addEventListener("resize", () => manager.handleViewportResize())
        return () => window.removeEventListener("resize", () => manager.handleViewportResize())
    }, [containerId])
    return (
        <></>
    )
}


ResizeGroupListener.displayName = "ResizeGroupListener"


export default ResizeGroupListener;

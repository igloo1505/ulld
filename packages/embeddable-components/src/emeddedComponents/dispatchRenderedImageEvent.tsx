"use client"
import { useEffect } from 'react'


interface DispatchRenderedImageEventProps {

}


/* TODO: Move all of these custom events to the utilities package and pass them down to generated apps from one source. */
declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "ulld-figure-rendered": CustomEvent;
    }
}

const DispatchRenderedImageEvent = () => {
    useEffect(() => {
       window.dispatchEvent(new CustomEvent("ulld-figure-rendered")) 
    }, [])
    return null
}


DispatchRenderedImageEvent.displayName = "DispatchRenderedImageEvent"


export default DispatchRenderedImageEvent;

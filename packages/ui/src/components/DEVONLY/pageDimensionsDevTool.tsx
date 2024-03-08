"use client"
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'



interface PageDimensionsDevToolProps {

}


type K = {
    [P in keyof DOMRect]: DOMRect[P] extends number ? number : DOMRect[P] extends string ? string : null
}

/* type Extract<T, U> = T extends U ? T : never; */

/* type Pick<T, K extends keyof T> = { */
/*     [P in K]: T[P]; */
/* }; */

type L<T, O extends keyof T, U> = T[O] extends U ? O : never


const PropertyDisplay = ({ k, rect }: { k: string, rect: DOMRect }) => {
    return (
        <div className={"grid grid-cols-[50px_1fr] gap-2"}>
            <div>{`${k}:`}</div>
            <div>{rect[k as "width"]}</div>
        </div>
    )
}

let dKeys: (keyof DOMRect)[] = [
    "width",
    "height",
    "x",
    "y",
    "top",
    "bottom"
]
const DomRectDisplay = ({ rect }: { rect: DOMRect }) => {
    const ref = useRef<HTMLDivElement>(null!)
    const removeSelf = () => {
        ref.current?.remove()
    }

    return (
        <div ref={ref} className={"z-[9999999] cursor-pointer w-fit p-3 text-sm bg-popover text-popover-foreground rounded-md border fixed top-4 right-4"} onClick={removeSelf}>
            {dKeys.map((k) => <PropertyDisplay key={k} k={k} rect={rect} />)}
        </div>
    )
}


const PageDimensionsDevTool = (props: PageDimensionsDevToolProps) => {
    const [viewport, setViewport] = useState<DOMRect | null>(null)
    const handleViewport = () => setViewport(document?.body.getBoundingClientRect())
    useEffect(() => {
        handleViewport()
        window.addEventListener("resize", handleViewport)
        window.addEventListener("scroll", handleViewport)
        return () => {
            window.removeEventListener("resize", handleViewport)
            window.removeEventListener("scroll", handleViewport)
        }
    }, [])
    if (!viewport || typeof document === "undefined") return null
    return createPortal(<DomRectDisplay rect={viewport} />, document.body)
}


PageDimensionsDevTool.displayName = "PageDimensionsDevTool"


export default PageDimensionsDevTool;

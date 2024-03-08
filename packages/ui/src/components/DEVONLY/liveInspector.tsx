"use client"
import clsx from 'clsx'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'



interface LiveInspectorProps {
    content: string | object
    label?: React.ReactNode
    position?: "topRight" | "topLeft" | "bottomLeft" | "bottomRight"
}


const positionMap: { [k in NonNullable<LiveInspectorProps["position"]>]: string } = {
    topRight: "top-4 right-4",
    topLeft: "top-4 left-4",
    bottomLeft: "bottom-4 left-4",
    bottomRight: "bottom-4 right-4"
}

const LiveInspectorInternal = forwardRef(({ content, label, position = "topRight" }: LiveInspectorProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={clsx("w-fit h-fit max-w-6xl max-h-52 min-w-[200px] min-h-[150px] z-[99999] rounded border bg-card text-card-foreground p-4 flex flex-col justify-center items-center gap-3 fixed", positionMap[position])}>
            {label && <div className={"text-lg font-bold"}>{label}</div>}
            <div className={"w-full overflow-y-auto"}>{typeof content === "string" ? content : JSON.stringify(content, null, 4)}</div>
        </div>
    )
})

LiveInspectorInternal.displayName = "LiveInspectorInternal"


const LiveInspector = forwardRef((props: LiveInspectorProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    console.log("props in liveInspector: ", props)
    return createPortal(<LiveInspectorInternal {...props} />, document.body)
})

LiveInspector.displayName = "LiveInspector"


export default LiveInspector;


export const useLiveInspector = <T extends string | object>(value: T, label?: React.ReactNode, position?: LiveInspectorProps["position"]) => {
    const [internalValue, setInternalValue] = useState<T>(value)
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
        setInternalValue(value)
        return () => {
            ref.current?.remove()
        }
    }, [value])
    return <LiveInspector content={internalValue} label={label} position={position} ref={ref} />
}

import { getPropColor } from '@ulld/state/actions/ui/getPropColor'
import { PropColor } from '@ulld/utilities/shadColorMap'
import clsx from 'clsx'
import React from 'react'


type BoxedProps = {
    children: React.ReactNode
} & Record<keyof PropColor, boolean>


export const Boxed = ({ children, ...props }: BoxedProps) => {
    const { color, props: _props } = getPropColor(props, "border")
    return (
        <div className={"w-auto flex flex-col justify-center items-center"}>
        <div className={clsx("w-fit h-fit max-w-full flex flex-col justify-center items-center overflow-x-auto min-scrollbar border-2 rounded-md", color ? color : "border-foreground")}>
            <div className={"w-fit h-fit mx-4"}>
                {children}
            </div>
        </div>
        </div>
    )
}


Boxed.displayName = "Boxed"

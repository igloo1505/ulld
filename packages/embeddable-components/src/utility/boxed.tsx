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
        <div className={"w-auto h-fit flex flex-col justify-center items-center"}>
            <div className={clsx("w-fit h-fit border-2 px-4 rounded-md", color ? color : "border-foreground")}>
                {children}
            </div>
        </div>
    )
}


Boxed.displayName = "Boxed"

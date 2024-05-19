import clsx from 'clsx'
import React, { HTMLProps } from 'react'



interface CenteredTextProps extends HTMLProps<HTMLDivElement> {
    width?: number | string
    children?: React.ReactNode
    muted?: boolean
    noMargin?: boolean
}

export const CenteredText = ({ width, children, muted, noMargin, ...props }: CenteredTextProps) => {
    return (
        <div {...props} className={clsx("w-full h-fit flex flex-col justify-center items-center gap-3", !noMargin && "my-5", props.className)}>
            <div
                className={clsx("text-center", muted && "text-muted-foreground")}
            >
                {children}
            </div>
        </div>
    )
}


CenteredText.displayName = "CenteredText"

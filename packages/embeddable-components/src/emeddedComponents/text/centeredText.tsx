import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { CenteredTextProps } from './centeredTextProps'


export const CenteredText = ({ width, children, muted, noMargin, ...props }: CenteredTextProps & HTMLProps<HTMLDivElement>) => {
    return (
        <div {...props} className={clsx("w-full h-fit flex flex-col justify-center items-center gap-3", !noMargin && "my-5", props.className)}>
            <div
                className={clsx("text-center", muted && "text-muted-foreground")}
                style={{
                    maxWidth: typeof width === "number" ? `${width}px` : width
                }}
            >
                {children}
            </div>
        </div>
    )
}


CenteredText.displayName = "CenteredText"

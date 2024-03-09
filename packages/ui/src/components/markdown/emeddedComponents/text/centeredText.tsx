import clsx from 'clsx'
import React from 'react'



interface CenteredTextProps {
    width?: number | string
    children?: React.ReactNode
    muted?: boolean
    noMargin?: boolean
}

export const CenteredText = ({ width, children, muted, noMargin }: CenteredTextProps) => {
    return (
        <div className={clsx("w-full h-fit flex flex-col justify-center items-center gap-3", !noMargin && "my-5")}>
            <div
                style={{
                    width: width ? width : "min(400px, 85vw)"
                }}
                className={clsx("text-center", muted && "text-muted-foreground")}
            >
                {children}
            </div>
        </div>
    )
}


CenteredText.displayName = "CenteredText"

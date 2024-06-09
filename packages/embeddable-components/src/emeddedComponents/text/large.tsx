import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { LargeProps } from './largeProps'


export const Large = ({ children, center, noMargin, muted, ...props }: LargeProps & HTMLProps<HTMLSpanElement>) => {
    return (
        <span 
            {...props}
            className={clsx("text-lg not-prose", !noMargin && "!mt-2", center && "w-full text-center", noMargin && "!my-0", muted && "text-muted-foreground", props.className)}
        >{children}</span>
    )
}


Large.displayName = "Large"


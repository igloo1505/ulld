import clsx from 'clsx'
import React, {ReactNode, HTMLProps} from 'react'



interface ErrorMarginProps extends HTMLProps<HTMLDivElement> {
     children: ReactNode
     bg: boolean
     small: boolean
}

export const ErrorMargin = ({children, bg, small = true, ...props}: ErrorMarginProps) => {
return (
    <div {...props} className={clsx(bg ? "bg-error text-error-foreground" : "text-error", small && "text-sm",  props.className)}>
            <span className={"font-semibold"}>
                Error:{" "}
            </span>
            <span>
            {children}
            </span>
        </div>
)
}


ErrorMargin.displayName = "ErrorMargin"



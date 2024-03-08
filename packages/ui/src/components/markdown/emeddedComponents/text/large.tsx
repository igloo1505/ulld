import clsx from 'clsx'
import React from 'react'



interface LargeProps {
    children: string
    center?: boolean
}

const Large = ({ children, center }: LargeProps) => {
    return (
        <div className={clsx("text-lg font-semibold", center && "w-full text-center")}>{children}</div>
    )
}


Large.displayName = "Large"


export default Large;

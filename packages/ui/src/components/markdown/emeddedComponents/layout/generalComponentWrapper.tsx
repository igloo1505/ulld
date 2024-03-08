import clsx from 'clsx'
import React from 'react'



interface GeneralComponentWrapperProps {
    children: React.ReactNode
    className?: string
}

const GeneralComponentWrapper = (props: GeneralComponentWrapperProps) => {
    return (
        <div className={clsx("w-full h-fit mb-3 flex flex-col justify-center items-center", props.className && props.className)}>{props.children}</div>
    )
}


GeneralComponentWrapper.displayName = "GeneralComponentWrapper"


export default GeneralComponentWrapper;

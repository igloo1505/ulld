import React from 'react'



interface FullScreenGroupHeadingProps {
    children: React.ReactNode
}

const FullScreenGroupHeading = ({ children }: FullScreenGroupHeadingProps) => {
    return (
        <h2 className={"text-2xl md:text-3xl font-semibold w-full text-center md:w-fit"}>{children}</h2>
    )
}


FullScreenGroupHeading.displayName = "FullScreenGroupHeading"


export default FullScreenGroupHeading;

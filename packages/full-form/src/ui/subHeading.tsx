import React from 'react'



interface SubHeadingProps {
    subtitle?: string
    children: string
}


export const SubHeading = ({ subtitle, children }: SubHeadingProps) => {
    return (
        <h3 className="mb-4 text-lg font-medium">{children}</h3>
    )
}


SubHeading.displayName = "SubHeading"

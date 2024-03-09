import React from 'react'



interface FullFormSubHeadingProps {
    subtitle?: string
    children: string
}

export const FullFormSubHeading = ({ subtitle, children }: FullFormSubHeadingProps) => {
    return (
        <h3 className="mb-4 text-lg font-medium">{children}</h3>
    )
}


FullFormSubHeading.displayName = "FullFormSubHeading"

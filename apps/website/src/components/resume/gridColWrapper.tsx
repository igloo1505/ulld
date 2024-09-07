import React, { ReactNode } from 'react'



interface ResumeGridColoumnWrapperProps {
 children: ReactNode
}

const ResumeGridColoumnWrapper = ({children}: ResumeGridColoumnWrapperProps) => {
return (
    <div className={"w-full space-y-6"}>{children}</div>
)
}


ResumeGridColoumnWrapper.displayName = "ResumeGridColoumnWrapper"


export default ResumeGridColoumnWrapper;

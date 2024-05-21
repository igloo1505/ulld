"use client"
import React, { ReactNode } from 'react'



interface CodeOutputProps {
   children: ReactNode
}

const CodeOutput = ({children}: CodeOutputProps) => {
return (
    <div className={"w-full h-full max-h-full overflow-y-auto"}>{children}</div>
)
}


CodeOutput.displayName = "CodeOutput"


export default CodeOutput;

import React, { ReactNode } from 'react'



interface H1SizeContainerProps {
 children: ReactNode
}

const H1SizeContainer = ({children}: H1SizeContainerProps) => {
return (
    <div className={"h-9 lg:h-12 w-full flex flex-row justify-center items-center gap-2"}>{children}</div>
)
}


H1SizeContainer.displayName = "H1SizeContainer"


export default H1SizeContainer;

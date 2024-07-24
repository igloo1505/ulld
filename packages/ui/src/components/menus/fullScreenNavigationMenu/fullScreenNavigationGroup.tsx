import React from 'react'
import FullScreenNavigationItem  from './fullScreenNavigationItem'
import FullScreenGroupHeading from './fullScreenGroupHeading'
import { FullScreenNavItem } from '@ulld/types'


interface FullScreenNavigationGroupProps {
    links: FullScreenNavItem[]
    backOnClick?: boolean
    label: string
}

const FullScreenNavigationGroup = ({ links, label, backOnClick }: FullScreenNavigationGroupProps) => {
    return (
        <div className={"w-full h-fit mt-6 md:mt-0 flex flex-col justify-start items-start @container"}>
            <FullScreenGroupHeading>{label}</FullScreenGroupHeading>
            <hr className={"w-full my-2 bg-primary"} />
            <div className={"w-full grid grid-cols-1 @[400px]:grid-cols-[1fr_1fr] gap-x-2"}>
                {links.map((d, i) => {
                    return <FullScreenNavigationItem
                        backOnClick={backOnClick}
                        key={`utility-link-${i}`}
                        item={d}
                    />
                })}
            </div>
        </div>
    )
}


FullScreenNavigationGroup.displayName = "FullScreenNavigationGroup"


export default FullScreenNavigationGroup;

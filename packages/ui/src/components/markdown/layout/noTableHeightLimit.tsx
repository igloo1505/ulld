import { getClassesFromFrontMatter } from '#/actions/getClassesFromFrontMatter'
import { FrontMatterType } from '#/classes/frontMatter/zodFrontMatterObject'
import clsx from 'clsx'
import React from 'react'



interface NoTableHeightLimitProps {
    children: React.ReactNode
    height?: number | string
    h?: number | string
    maxHeight?: number | string
    styles?: FrontMatterType["tableStyles"]
}

const NoTableHeightLimit = ({ children, height, h, maxHeight, styles }: NoTableHeightLimitProps) => {
    let _h = height || h || maxHeight
    return (
        <div
            className={clsx("w-full h-fit", !_h && "noMaxTableHeight", styles && getClassesFromFrontMatter({ tableStyles: styles }))}
            style={{
                ...(_h && { maxHeight: typeof _h === "number" ? `${_h}px` : _h })
            }}
        >{children}</div>
    )
}


NoTableHeightLimit.displayName = "NoTableHeightLimit"


export default NoTableHeightLimit;

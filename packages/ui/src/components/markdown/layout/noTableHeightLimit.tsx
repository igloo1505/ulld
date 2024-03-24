import { FrontMatterType } from '@ulld/state/classes/frontMatter/zodFrontMatterObject'
import clsx from 'clsx'
import React from 'react'
import { getClassesFromFrontMatter } from '../../../actions/universal/getClassesFromFrontMatter'



interface NoTableHeightLimitProps {
    children: React.ReactNode
    height?: number | string
    h?: number | string
    maxHeight?: number | string
    styles?: FrontMatterType["tableStyles"]
}

export const NoTableHeightLimit = ({ children, height, h, maxHeight, styles }: NoTableHeightLimitProps) => {
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


import clsx from 'clsx'
import React from 'react'
import { GridItemProps, GridProps } from './gridProps'




const columnMap = {
    "2": "gridCols-2 w-full",
    "3": "gridCols-3 w-full",
    "4": "gridCols-4 w-full",
}

export const GridItem = ({ children, background, center }: GridItemProps) => {
    return (
        <div className={clsx("w-full min-h-full p-4 rounded-lg", center && " flex flex-col justify-center items-center", background && "bg-gray-100 dark:bg-gray-800")}>
            {children}
        </div>
    )
}


/* TODO: Consider adding an auto class based on number of children. It might not be reliably stylable (probably not a word) but could be useful for a default case instead of just blowing up entirely. */
export const Grid = ({ cols: _cols, columns, minMax, children, autoFit }: GridProps) => {
    let cols = _cols || columns
    return (
        <div
            className={clsx("grid gap-2 md:gap-4 place-items-center", Boolean(cols && !minMax) && columnMap[`${cols}` as keyof typeof columnMap])}
            style={{
                ...(minMax && {
                    gridTemplateColumns: `repeat(${autoFit ? "auto-fit" : "auto-fill"}, minmax(${minMax}${typeof minMax === "number" ? "px" : ""}, 1fr))`
                })
            }}
        >
            {children}
        </div>
    )
}


Grid.displayName = "Grid"

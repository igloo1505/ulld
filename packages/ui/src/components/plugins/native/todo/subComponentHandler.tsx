import { Row, RowModel } from '@tanstack/react-table'
import React from 'react'



interface SubComponentHandlerProps<T> {
    row: T
}

export const SubComponentHandler = <T extends Row<any>>({ row }: SubComponentHandlerProps<T>) => {
    return (
        <div></div>
    )
}


SubComponentHandler.displayName = "SubComponentHandler"

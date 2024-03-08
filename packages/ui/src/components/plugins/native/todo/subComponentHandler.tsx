import { Row, RowModel } from '@tanstack/react-table'
import React from 'react'



interface SubComponentHandlerProps<T> {
    row: T
}

const SubComponentHandler = <T extends Row<any>>({ row }: SubComponentHandlerProps<T>) => {
    return (
        <div></div>
    )
}


SubComponentHandler.displayName = "SubComponentHandler"


export default SubComponentHandler;

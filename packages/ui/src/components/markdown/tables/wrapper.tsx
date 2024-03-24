import React, { Suspense } from 'react'
import Table, { TableComponentType } from './basic';
import { LoadingIndicator } from '../../loading/loadingIndicator';


export const TableWrapper: TableComponentType = (props) => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <Table {...props} />
        </Suspense>
    )
}


TableWrapper.displayName = "TableWrapper"

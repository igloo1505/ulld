import React, { Suspense } from 'react'
import Table, { TableComponentType } from './basic';
import LoadingIndicator from '#/components/ui/loadingIndicator';


const TableWrapper: TableComponentType = (props) => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <Table {...props} />
        </Suspense>
    )
}


TableWrapper.displayName = "TableWrapper"


export default TableWrapper;

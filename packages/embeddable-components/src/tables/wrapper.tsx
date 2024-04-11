import React, { Suspense } from "react";
import Table, { TableWrapperProps } from "./basic";
import { EmbeddedLoadingIndicator } from "../embeddedLoadingIndicator";

export const TableWrapper = (props: TableWrapperProps) => {
    return (
        <Suspense fallback={<EmbeddedLoadingIndicator />}>
            <Table {...props} />
        </Suspense>
    );
};

TableWrapper.displayName = "TableWrapper";

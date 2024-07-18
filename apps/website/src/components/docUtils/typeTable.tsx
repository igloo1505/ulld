import React, { ComponentProps } from "react";
import { TypeTable as TT } from "fumadocs-ui/components/type-table";
import TypeTableWrapper from "./typeTableWrapper";

interface TypeTableProps extends ComponentProps<typeof TT> { }

const TypeTable = (props: TypeTableProps) => {
    return (
        <TypeTableWrapper>
            <TT {...props} />
        </TypeTableWrapper>
    );
};

TypeTable.displayName = "TypeTable";

export default TypeTable;

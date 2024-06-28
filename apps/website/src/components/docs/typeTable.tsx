import React, { ComponentPropsWithoutRef } from "react";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import path from "path";

interface TypeTableProps extends ComponentPropsWithoutRef<typeof AutoTypeTable> {
    name: string;
}

export const TypeTable = ({
    name,
    ...props
}: TypeTableProps) => {
    return (
        <AutoTypeTable
            {...props}
            path={"./src/fumaDocs/typesForDocumentation.ts"}
            name={name}
            /* options={ */
            /* } */
        />
    );
};

TypeTable.displayName = "TypeTable";

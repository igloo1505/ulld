import React, { ComponentPropsWithoutRef } from "react";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import cn from "@ulld/utilities/cn";

interface TypeTableProps
    extends ComponentPropsWithoutRef<typeof AutoTypeTable> {
    name: string;
    title?: string;
    showName?: boolean;
    hideCol?: number | number[]
    extends?: string[] | string
    propsTitle?: string
}

export const TypeTable = ({
    name,
    showName,
    title,
    hideCol = [],
    propsTitle,
    extends: _extends,
    ...props
}: TypeTableProps) => {
    let hideClass = (Array.isArray(hideCol) ? hideCol : [hideCol]).map((n) => `hide-table-col-${n}`)
    let _title = propsTitle ? "Properties" : (title || name)
    /* console.log("pages: ", pages) */
    console.log("name: ", name)
    return (
        <div className={cn("w-full inline-block", hideClass)}>
            {(showName || title || propsTitle) && (
                <div className={"text-lg font-semibold"}>{_title}</div>
            )}
            <AutoTypeTable
                {...props}
                path={"./src/fumaDocs/typesForDocumentation.ts"}
                name={name}
                /* options={{ */
                /*     transform: (entry, propType, propSymbol) => { */
                /*         console.log("entry: ", entry); */
                /*         console.log("propType: ", propType); */
                /*         console.log("propSymbol: ", propSymbol); */
                /*     }, */
                /* }} */
            />
        </div>
    );
};

TypeTable.displayName = "TypeTable";

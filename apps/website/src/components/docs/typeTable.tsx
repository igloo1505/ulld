import React, { ComponentPropsWithoutRef } from "react";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import cn from "@ulld/utilities/cn";
import path from "path";

interface TypeTableProps
    extends ComponentPropsWithoutRef<typeof AutoTypeTable> {
    name: string;
    title?: string;
    showName?: boolean;
    hideCol?: number | number[];
    extends?: string[] | string;
    propsTitle?: string;
}

export const TypeTableEm = ({
    name,
    showName,
    title,
    hideCol = [],
    propsTitle,
    extends: _extends,
    ...props
}: TypeTableProps) => {
    let hideClass = (Array.isArray(hideCol) ? hideCol : [hideCol]).map(
        (n) => `hide-table-col-${n}`,
    );
    let _title = propsTitle ? "Properties" : title || name;
    return (
        <div className={cn("w-full inline-block", hideClass)}>
            {(showName || title || propsTitle) && (
                <div className={"text-lg font-semibold"}>{_title}</div>
            )}
            <AutoTypeTable
                {...props}
                path={path.join(
                    process.cwd(),
                    "src/fumaDocs/typesForDocumentation.ts",
                )}
                name={name}
                options={{
                    /* allowInternal: true, */
                    transform: (entry, propType, propSymbol) => {
                        console.log("entry: ", entry);
                        console.log("propType: ", propType);
                        console.log("propSymbol: ", propSymbol);
                    },
                }}
            />
        </div>
    );
};

TypeTableEm.displayName = "TypeTable";

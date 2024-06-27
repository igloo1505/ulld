import React from "react";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { GenerateOptions } from "fumadocs-typescript";
import path from "path";

interface TypeTableProps {
    path: string;
    name: string;
    packageName?: string;
}

export const TypeTable = ({
    path: _path,
    name,
    packageName,
}: TypeTableProps) => {
    /* const _path = packageName ? `../../../../../packages/${packageName}` : path */
    const p = path.join(__dirname, `../../../../../packages/${packageName}`);
    return (
        <AutoTypeTable
            path={_path}
            name={name}
            options={
                {
                    /* config: { */
                    /*     tsConfigPath: "docsTsConfig.json" */
                    /* } */
                }
            }
        />
    );
};

TypeTable.displayName = "TypeTable";

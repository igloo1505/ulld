import path from "path";
import type {
    CommonVariableDeclarationFields,
    DevelopmentOutputConstructorProps,
    GetRelativeImportStringProps,
    ParsedArrayValues,
    CommonArrayMethods
} from "./types";
import { DevelopmentOutputFSUtils } from "./fileSystemUtils";

export abstract class DevelopmentOutputUtils extends DevelopmentOutputFSUtils {
    initialContent = "";
    constructor(props: DevelopmentOutputConstructorProps = {}) {
        super();
        if (props.initialContent) {
            this.initialContent = props.initialContent;
        }
    }

    protected getVariableDeclarationString(
        props: CommonVariableDeclarationFields,
    ): `${"export " | ""}const ${string}${`: ${string}` | ""} = ` {
        return `${props.exportVar ? "export " : ""}const ${props.varName}${props.typescriptType ? `: ${props.typescriptType}` : ""} = `;
    }

    protected getTypeDeclarationString(
        props: Pick<CommonVariableDeclarationFields, "exportVar" | "varName">,
    ): `${"export " | ""}type ${string} = ` {
        return `${props.exportVar ? "export " : ""}type ${props.varName} = `;
    }

    protected getInitialBody(
        body: string,
        opts: { prefixFirstLine?: string },
    ): string {
        if (opts.prefixFirstLine) {
            return `${opts.prefixFirstLine}\n${body}`;
        }
        return body;
    }

    getRelativeImportString(props: GetRelativeImportStringProps): string {
        let s = "import ";
        if (props.typeImport) {
            s += "type ";
        }
        if (props.defaultExport) {
            s += `${props.importName} `;
        } else {
            s += `{ ${props.importName} } `;
        }
        s += `from "${path.relative(path.dirname(props.outputFile), props.importSourceFile)}"`;
        return s;
    }

    removeDuplicateKeys<T>(props: Omit<CommonArrayMethods<T>, "getKey"> & {getKey?: CommonArrayMethods<T>["getKey"]}): ParsedArrayValues[] {
        if (!props.getKey) {
            return props.arr.map((x) => ({
                value: props.getValue(x),
                key: undefined,
            }));
        }
        const items: ParsedArrayValues[] = [];
        const keys: string[] = [];
        for (const k of props.arr) {
            const _key = props.getKey(k);
            if (!keys.includes(_key)) {
                items.push({
                    value: props.getValue(k),
                    key: _key,
                });
                keys.push(_key);
            }
        }
        return items;
    }

    protected conditionallyExportDefault(
        props: CommonVariableDeclarationFields,
        body: string,
    ): string {
        if (props.defaultExportVar) {
            return `${body}\n\nexport default ${props.varName};`;
        }
        return body;
    }
}

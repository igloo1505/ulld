import type { CommonVariableDeclarationFields, DevelopmentOutputConstructorProps, GetRelativeImportStringProps, ParsedArrayValues, CommonArrayMethods } from "./types";
import { DevelopmentOutputFSUtils } from "./fileSystemUtils";
export declare abstract class DevelopmentOutputUtils extends DevelopmentOutputFSUtils {
    initialContent: string;
    constructor(props?: DevelopmentOutputConstructorProps);
    protected getVariableDeclarationString(props: CommonVariableDeclarationFields): `${"export " | ""}const ${string}${`: ${string}` | ""} = `;
    protected getTypeDeclarationString(props: Pick<CommonVariableDeclarationFields, "exportVar" | "varName">): `${"export " | ""}type ${string} = `;
    protected getInitialBody(body: string, opts: {
        prefixFirstLine?: string;
    }): string;
    getRelativeImportString(props: GetRelativeImportStringProps): string;
    removeDuplicateKeys<T>(props: Omit<CommonArrayMethods<T>, "getKey"> & {
        getKey?: CommonArrayMethods<T>["getKey"];
    }): ParsedArrayValues[];
    protected conditionallyExportDefault(props: CommonVariableDeclarationFields, body: string): string;
}
//# sourceMappingURL=outputUtils.d.ts.map
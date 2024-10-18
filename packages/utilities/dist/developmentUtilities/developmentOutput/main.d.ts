import type { ArrayToEnumStringProps, DevelopmentOutputFunctionPropMap, GenFileContentItem } from "./types";
export declare class DevelopmentOutput implements DevelopmentOutputFunctionPropMap {
    initialContent: string;
    constructor(initialContent?: string);
    arrayToEnum<T extends object>(props: ArrayToEnumStringProps<T>): string;
    genFileContent(items: GenFileContentItem[]): string;
}
//# sourceMappingURL=main.d.ts.map
interface ExportObject {
    import?: string;
    require?: string;
    node?: string;
    default?: string;
    types?: string;
}
interface Options {
    writeToFile?: boolean;
    /** Set to true if json files are being transpiled to mjs and cjs files. */
    transpiledJson?: boolean;
    /** Set to true if ttf font files are being transpiled to mjs and cjs files. */
    transpiledTtf?: boolean;
    /** Log files that are not found in existing exports. */
    logNotFound?: boolean;
}
export declare const getTranspiledExports: (files: string[], packageJsonPath: string, opts?: Options) => Record<string, string | ExportObject>;
export {};
//# sourceMappingURL=getTranspiledExports.d.ts.map
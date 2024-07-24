import { ParsedAppConfig } from "@ulld/configschema/types";
export declare const checkParsableFiletypesAtPath: (p: string, fsRoot: string, _config?: ParsedAppConfig) => Promise<{
    ".mdx": boolean;
    ".md": boolean;
    ".ipynb": boolean;
    ".csv": boolean;
    ".tsv": boolean;
    ".excel": boolean;
    ".numpy": boolean;
    ".html": boolean;
    ".pickle": boolean;
    ".db": boolean;
    ".sql": boolean;
    ".pdf": boolean;
    ".json": boolean;
    ".tex": boolean;
    ".hdf5": boolean;
}>;
//# sourceMappingURL=checkParsableFiletypesAtPath.d.ts.map
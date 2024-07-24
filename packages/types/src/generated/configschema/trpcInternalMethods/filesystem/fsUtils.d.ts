import { ParsedAppConfig } from '@ulld/configschema/types';
export declare const checkExistsOfAllParsableTypes: (rootRelativePath: string, _config?: ParsedAppConfig) => Promise<{
    path: string;
    format: ".mdx" | ".md" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5";
} | undefined>;
//# sourceMappingURL=fsUtils.d.ts.map
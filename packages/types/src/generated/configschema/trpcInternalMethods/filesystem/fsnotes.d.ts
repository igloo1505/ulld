import { ParsedAppConfig } from "@ulld/configschema/types";
import { ParsableExtensions } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions";
export declare const getFsMdx: (rootRelativePath: string, ext?: ".mdx" | ".md", _config?: ParsedAppConfig | undefined | null, useProcessRoot?: boolean) => Promise<string>;
export declare const getFsIpynb: (rootRelativePath: string, _config?: ParsedAppConfig) => Promise<string>;
export declare const getFsNote: (rootRelativePath: string, knownType?: ParsableExtensions) => Promise<{
    content: string;
    format: string;
} | undefined>;
//# sourceMappingURL=fsnotes.d.ts.map
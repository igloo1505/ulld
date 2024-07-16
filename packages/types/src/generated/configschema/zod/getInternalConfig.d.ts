import type { InternalDocumentConfigType } from "./internalDocumentTypes";
import type { AppConfigSchemaOutput } from "./main";
import { ParsableExtensions } from "./secondaryConfigParse/getParsableExtensions";
interface ExtraConfig {
    parsableExtensions: ParsableExtensions[];
    filetypeSpecificAppendices: Record<ParsableExtensions, string>;
    internalDocumentTypes: InternalDocumentConfigType[];
    fileTypes: {
        image: string[];
    };
}
export declare const getInternalConfig: <T extends object>(appConfig?: AppConfigSchemaOutput, searchParams?: T) => ExtraConfig & AppConfigSchemaOutput;
export {};
//# sourceMappingURL=getInternalConfig.d.ts.map
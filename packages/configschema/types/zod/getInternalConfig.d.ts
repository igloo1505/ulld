import type { InternalDocumentConfigType } from "./internalDocumentTypes";
import type { AppConfigSchemaOutput } from "./main";
import { ParsableExtensionsSchema } from "./secondaryConfigParse/getParsableExtensions";
interface ExtraConfig {
    parsableExtensions: ParsableExtensionsSchema[];
    filetypeSpecificAppendices: Record<ParsableExtensionsSchema, string>;
    internalDocumentTypes: InternalDocumentConfigType[];
    fileTypes: {
        image: string[];
    };
}
export declare const getInternalConfig: <T extends object>(appConfig?: AppConfigSchemaOutput, searchParams?: T) => ExtraConfig & AppConfigSchemaOutput;
export {};
//# sourceMappingURL=getInternalConfig.d.ts.map
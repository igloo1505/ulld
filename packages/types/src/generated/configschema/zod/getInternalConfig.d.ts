import type { InternalDocumentConfigType } from "./internalDocumentTypes.js";
import type { AppConfigSchemaOutput } from "./main.js";
import { ParsableExtensionsSchema } from "./secondaryConfigParse/getParsableExtensions.js";
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

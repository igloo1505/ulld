import { documentTypeConfigSchemaOutputSchema } from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import { frontMatterSchema } from "../../frontMatter/main.js";
export const noteDetailsReturn = z.object({
    id: z.number().int(),
    quickLink: z.string().nullish(),
    bookmarked: z.boolean(),
    sequentialKey: z.string().nullish(),
    sequentialIndex: z.number().nullish(),
    firstSync: z.date().or(z.string()),
    lastSync: z.date().or(z.string()),
});
export const unifiedMdxParserParamSchema = z.object({
    content: z.string(),
    docTypeData: z
        .union([
        documentTypeConfigSchemaOutputSchema.deepPartial().required({
            docType: true,
            id: true,
            url: true,
        }),
        z.object({}),
    ])
        .default({}),
    data: frontMatterSchema.deepPartial(),
    appConfig: minimalParsableAppConfig,
    serverClient: z.any(),
    db: noteDetailsReturn.optional(),
});
z.object({
    content: z.string(),
    data: frontMatterSchema.deepPartial(),
    appConfig: minimalParsableAppConfig,
    serverClient: z.any(),
    db: noteDetailsReturn.optional(),
});

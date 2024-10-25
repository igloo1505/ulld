import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import { documentTypeConfigSchemaOutputSchema, } from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
import { mdxNotePropsSchema } from "../../../api/prismaMdxRelations/mdxNote/classProps.js";
import { extendedFrontMatterSchema, } from "../../frontMatter/main.js";
import { unifiedMdxParserParamSchema } from "./unifiedMdxParserParams.js";
export const mdxNoteFromStringPropsSchema = mdxNotePropsSchema
    .pick({
    raw: true,
    rootRelativePath: true,
    bookmarked: true,
})
    .merge(z.object({
    docTypeData: documentTypeConfigSchemaOutputSchema,
}));
export const unifiedMdxParserSchema = z
    .function()
    .args(unifiedMdxParserParamSchema)
    .returns(z.promise(extendedFrontMatterSchema));
export const fromMdxStringOptSchema = z
    .object({
    noteTypeId: z.string().optional(),
})
    .default({});
export const parseParamsSchema = z.object({
    appConfig: minimalParsableAppConfig,
    docTypeData: z.union([documentTypeConfigSchemaOutputSchema, z.object({})]).default({}),
    parser: unifiedMdxParserSchema,
});
export const internalMdxStringParseParamSchema = z.object({
    _opts: fromMdxStringOptSchema,
    props: mdxNoteFromStringPropsSchema,
    parseParams: parseParamsSchema,
});
export const internalMdxStringParseParamSchemaOptionalAppConfig = internalMdxStringParseParamSchema
    .omit({
    parseParams: true,
})
    .extend({
    parseParams: parseParamsSchema.partial({
        appConfig: true,
    }),
});

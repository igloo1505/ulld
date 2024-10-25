import {
  unifiedMdxParserParamSchema
} from "./chunk-IXN3MKR7.js";
import {
  extendedFrontMatterSchema
} from "./chunk-VM6SYPKN.js";
import {
  mdxNotePropsSchema
} from "./chunk-XX4QDPA3.js";

// src/mdx/parsing/params/main.ts
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import {
  documentTypeConfigSchemaOutputSchema
} from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
var mdxNoteFromStringPropsSchema = mdxNotePropsSchema.pick({
  raw: true,
  rootRelativePath: true,
  bookmarked: true
}).merge(
  z.object({
    docTypeData: documentTypeConfigSchemaOutputSchema
  })
);
var unifiedMdxParserSchema = z.function().args(unifiedMdxParserParamSchema).returns(z.promise(extendedFrontMatterSchema));
var fromMdxStringOptSchema = z.object({
  noteTypeId: z.string().optional()
}).default({});
var parseParamsSchema = z.object({
  appConfig: minimalParsableAppConfig,
  docTypeData: z.union([documentTypeConfigSchemaOutputSchema, z.object({})]).default({}),
  parser: unifiedMdxParserSchema
});
var internalMdxStringParseParamSchema = z.object({
  _opts: fromMdxStringOptSchema,
  props: mdxNoteFromStringPropsSchema,
  parseParams: parseParamsSchema
});
var internalMdxStringParseParamSchemaOptionalAppConfig = internalMdxStringParseParamSchema.omit({
  parseParams: true
}).extend({
  parseParams: parseParamsSchema.partial({
    appConfig: true
  })
});

export {
  mdxNoteFromStringPropsSchema,
  unifiedMdxParserSchema,
  fromMdxStringOptSchema,
  parseParamsSchema,
  internalMdxStringParseParamSchema,
  internalMdxStringParseParamSchemaOptionalAppConfig
};
//# sourceMappingURL=chunk-XOZKSEYU.js.map
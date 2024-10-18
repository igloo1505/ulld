import {
  unifiedMdxParserParamSchema
} from "./chunk-QQOK4C6A.js";
import {
  extendedFrontMatterSchema
} from "./chunk-IYN4PQHD.js";
import {
  mdxNotePropsSchema
} from "./chunk-XX4QDPA3.js";

// src/mdx/parsing/params/main.ts
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import {
  documentTypeConfigSchema
} from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
var mdxNoteFromStringPropsSchema = mdxNotePropsSchema.pick({
  raw: true,
  rootRelativePath: true,
  bookmarked: true
}).merge(
  z.object({
    docTypeData: documentTypeConfigSchema
  })
);
var unifiedMdxParserSchema = z.function().args(unifiedMdxParserParamSchema).returns(z.promise(extendedFrontMatterSchema));
var fromMdxStringOptSchema = z.object({
  noteTypeId: z.string().optional()
}).default({});
var parseParamsSchema = z.object({
  appConfig: minimalParsableAppConfig,
  docTypeData: z.union([documentTypeConfigSchema, z.object({})]).default({}),
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
//# sourceMappingURL=chunk-ZH5RDWCF.js.map
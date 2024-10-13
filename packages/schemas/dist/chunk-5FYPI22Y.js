import {
  extendedFrontMatterSchema,
  frontMatterSchema
} from "./chunk-KDNETXET.js";

// src/mdx/parsing/params/main.ts
import { mdxNotePropsSchema } from "@ulld/api/generalPrismaSchemas";
import { minimalParsableAppConfig } from "@ulld/configschema/zod-refinedAppConfigs";
import {
  documentTypeConfigSchema,
  documentTypeConfigSchemaInner
} from "@ulld/configschema/zod/documentConfigSchema";
import { z } from "zod";
var mdxNoteFromStringPropsSchema = mdxNotePropsSchema.innerType().pick({
  raw: true,
  rootRelativePath: true,
  bookmarked: true
}).merge(
  z.object({
    docTypeData: documentTypeConfigSchema
  })
);
var mdxNoteIntriguingValSummaryPropsSchema = mdxNotePropsSchema.innerType().omit({
  latexTitle: true,
  raw: true,
  floatImages: true,
  formatted: true,
  citations: true,
  quickLinkId: true,
  citationsListOrder: true,
  outgoingQuickLinks: true,
  equationIds: true,
  isProtected: true,
  sequentialKey: true,
  sequentialIndex: true,
  remoteUrl: true,
  noLog: true,
  saveFormatted: true,
  trackRemote: true,
  topics: true,
  tags: true,
  subjects: true
});
var noteDetailsReturn = z.object({
  id: z.number().int(),
  quickLink: z.string().nullish(),
  bookmarked: z.boolean(),
  sequentialKey: z.string().nullish(),
  sequentialIndex: z.number().nullish(),
  firstSync: z.date().or(z.string()),
  lastSync: z.date().or(z.string())
});
var unifiedMdxParserParamSchema = z.object({
  content: z.string(),
  docTypeData: z.union([
    documentTypeConfigSchemaInner.required({
      docType: true,
      id: true,
      url: true
    }),
    z.object({})
  ]).default({}),
  data: frontMatterSchema.deepPartial(),
  appConfig: minimalParsableAppConfig,
  serverClient: z.any(),
  db: noteDetailsReturn.optional()
});
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
  mdxNoteIntriguingValSummaryPropsSchema,
  unifiedMdxParserParamSchema,
  unifiedMdxParserSchema,
  fromMdxStringOptSchema,
  parseParamsSchema,
  internalMdxStringParseParamSchema,
  internalMdxStringParseParamSchemaOptionalAppConfig
};
//# sourceMappingURL=chunk-5FYPI22Y.js.map
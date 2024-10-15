"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ESR76SNcjs = require('./chunk-6ESR76SN.cjs');



var _chunkQBRVWTJRcjs = require('./chunk-QBRVWTJR.cjs');

// src/mdx/parsing/params/main.ts
var _zodrefinedAppConfigs = require('@ulld/configschema/zod-refinedAppConfigs');



var _documentConfigSchema = require('@ulld/configschema/zod/documentConfigSchema');
var _main = require('@ulld/configschema/zod/main');
var _zod = require('zod');
var mdxNoteFromStringPropsSchema = _chunk6ESR76SNcjs.mdxNotePropsSchema.pick({
  raw: true,
  rootRelativePath: true,
  bookmarked: true
}).merge(
  _zod.z.object({
    docTypeData: _documentConfigSchema.documentTypeConfigSchema
  })
);
var mdxNoteIntriguingValSummaryPropsSchema = _chunk6ESR76SNcjs.mdxNotePropsSchema.omit({
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
var noteDetailsReturn = _zod.z.object({
  id: _zod.z.number().int(),
  quickLink: _zod.z.string().nullish(),
  bookmarked: _zod.z.boolean(),
  sequentialKey: _zod.z.string().nullish(),
  sequentialIndex: _zod.z.number().nullish(),
  firstSync: _zod.z.date().or(_zod.z.string()),
  lastSync: _zod.z.date().or(_zod.z.string())
});
var unifiedMdxParserParamSchema = _zod.z.object({
  content: _zod.z.string(),
  docTypeData: _documentConfigSchema.documentTypeConfigSchemaInner.required({
    docType: true,
    id: true,
    url: true
  }),
  // docTypeData: z
  //   .union([
  //     documentTypeConfigSchemaInner.required({
  //       docType: true,
  //       id: true,
  //       url: true,
  //     }),
  //     z.object({}),
  //   ])
  //   .default({}),
  data: _chunkQBRVWTJRcjs.frontMatterSchema.deepPartial(),
  appConfig: _main.appConfigSchema,
  serverClient: _zod.z.any(),
  db: noteDetailsReturn.optional()
});
var unifiedMdxParserSchema = _zod.z.function().args(unifiedMdxParserParamSchema).returns(_zod.z.promise(_chunkQBRVWTJRcjs.extendedFrontMatterSchema));
var fromMdxStringOptSchema = _zod.z.object({
  noteTypeId: _zod.z.string().optional()
}).default({});
var parseParamsSchema = _zod.z.object({
  appConfig: _zodrefinedAppConfigs.minimalParsableAppConfig,
  docTypeData: _zod.z.union([_documentConfigSchema.documentTypeConfigSchema, _zod.z.object({})]).default({}),
  parser: unifiedMdxParserSchema
});
var internalMdxStringParseParamSchema = _zod.z.object({
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










exports.mdxNoteFromStringPropsSchema = mdxNoteFromStringPropsSchema; exports.mdxNoteIntriguingValSummaryPropsSchema = mdxNoteIntriguingValSummaryPropsSchema; exports.unifiedMdxParserParamSchema = unifiedMdxParserParamSchema; exports.unifiedMdxParserSchema = unifiedMdxParserSchema; exports.fromMdxStringOptSchema = fromMdxStringOptSchema; exports.parseParamsSchema = parseParamsSchema; exports.internalMdxStringParseParamSchema = internalMdxStringParseParamSchema; exports.internalMdxStringParseParamSchemaOptionalAppConfig = internalMdxStringParseParamSchemaOptionalAppConfig;
//# sourceMappingURL=chunk-UCY7ZYK3.cjs.map
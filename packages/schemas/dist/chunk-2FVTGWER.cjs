"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNYX3ITR4cjs = require('./chunk-NYX3ITR4.cjs');

// src/mdx/parsing/params/unifiedMdxParserParams.ts
var _documentConfigSchema = require('@ulld/configschema/zod/documentConfigSchema');
var _zod = require('zod');
var _zodrefinedAppConfigs = require('@ulld/configschema/zod-refinedAppConfigs');
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
  docTypeData: _documentConfigSchema.documentTypeConfigSchemaInner,
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
  data: _chunkNYX3ITR4cjs.frontMatterSchema.deepPartial(),
  appConfig: _zodrefinedAppConfigs.minimalParsableAppConfig,
  serverClient: _zod.z.any(),
  db: noteDetailsReturn.optional()
});




exports.noteDetailsReturn = noteDetailsReturn; exports.unifiedMdxParserParamSchema = unifiedMdxParserParamSchema;
//# sourceMappingURL=chunk-2FVTGWER.cjs.map
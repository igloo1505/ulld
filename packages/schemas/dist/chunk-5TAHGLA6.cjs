"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE2INLS7Kcjs = require('./chunk-E2INLS7K.cjs');

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
  docTypeData: _zod.z.union([
    _documentConfigSchema.documentTypeConfigSchemaOutputSchema.deepPartial().required({
      docType: true,
      id: true,
      url: true
    }),
    _zod.z.object({})
  ]).default({}),
  data: _chunkE2INLS7Kcjs.frontMatterSchema.deepPartial(),
  appConfig: _zodrefinedAppConfigs.minimalParsableAppConfig,
  serverClient: _zod.z.any(),
  db: noteDetailsReturn.optional()
});
_zod.z.object({
  content: _zod.z.string(),
  data: _chunkE2INLS7Kcjs.frontMatterSchema.deepPartial(),
  appConfig: _zodrefinedAppConfigs.minimalParsableAppConfig,
  serverClient: _zod.z.any(),
  db: noteDetailsReturn.optional()
});




exports.noteDetailsReturn = noteDetailsReturn; exports.unifiedMdxParserParamSchema = unifiedMdxParserParamSchema;
//# sourceMappingURL=chunk-5TAHGLA6.cjs.map
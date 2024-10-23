"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIDRK4CXRcjs = require('./chunk-IDRK4CXR.cjs');


var _chunkE2INLS7Kcjs = require('./chunk-E2INLS7K.cjs');


var _chunk4ZSFJZFZcjs = require('./chunk-4ZSFJZFZ.cjs');

// src/mdx/parsing/params/main.ts
var _zodrefinedAppConfigs = require('@ulld/configschema/zod-refinedAppConfigs');


var _documentConfigSchema = require('@ulld/configschema/zod/documentConfigSchema');
var _zod = require('zod');
var mdxNoteFromStringPropsSchema = _chunk4ZSFJZFZcjs.mdxNotePropsSchema.pick({
  raw: true,
  rootRelativePath: true,
  bookmarked: true
}).merge(
  _zod.z.object({
    docTypeData: _documentConfigSchema.documentTypeConfigSchema
  })
);
var unifiedMdxParserSchema = _zod.z.function().args(_chunkIDRK4CXRcjs.unifiedMdxParserParamSchema).returns(_zod.z.promise(_chunkE2INLS7Kcjs.extendedFrontMatterSchema));
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








exports.mdxNoteFromStringPropsSchema = mdxNoteFromStringPropsSchema; exports.unifiedMdxParserSchema = unifiedMdxParserSchema; exports.fromMdxStringOptSchema = fromMdxStringOptSchema; exports.parseParamsSchema = parseParamsSchema; exports.internalMdxStringParseParamSchema = internalMdxStringParseParamSchema; exports.internalMdxStringParseParamSchemaOptionalAppConfig = internalMdxStringParseParamSchemaOptionalAppConfig;
//# sourceMappingURL=chunk-N4FTIHYA.cjs.map
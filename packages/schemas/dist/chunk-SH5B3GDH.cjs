"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKSEIAFQ5cjs = require('./chunk-KSEIAFQ5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkKSEIAFQ5cjs.SettingsAppendixOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkKSEIAFQ5cjs.SettingsAppendixOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SettingsAppendixOrderByRelevanceInputSchema_default = SettingsAppendixOrderByRelevanceInputSchema;




exports.SettingsAppendixOrderByRelevanceInputSchema = SettingsAppendixOrderByRelevanceInputSchema; exports.SettingsAppendixOrderByRelevanceInputSchema_default = SettingsAppendixOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-SH5B3GDH.cjs.map
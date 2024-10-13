"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOIAKR6V5cjs = require('./chunk-OIAKR6V5.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SettingsOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOIAKR6V5cjs.SettingsOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOIAKR6V5cjs.SettingsOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SettingsOrderByRelevanceInputSchema_default = SettingsOrderByRelevanceInputSchema;




exports.SettingsOrderByRelevanceInputSchema = SettingsOrderByRelevanceInputSchema; exports.SettingsOrderByRelevanceInputSchema_default = SettingsOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-TFJYHHWE.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEYUIYQD4cjs = require('./chunk-EYUIYQD4.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkEYUIYQD4cjs.AutoSettingOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkEYUIYQD4cjs.AutoSettingOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var AutoSettingOrderByRelevanceInputSchema_default = AutoSettingOrderByRelevanceInputSchema;




exports.AutoSettingOrderByRelevanceInputSchema = AutoSettingOrderByRelevanceInputSchema; exports.AutoSettingOrderByRelevanceInputSchema_default = AutoSettingOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-HS67XPP6.cjs.map
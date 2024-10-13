"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXW7E34GTcjs = require('./chunk-XW7E34GT.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DailyFocusOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DailyFocusOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkXW7E34GTcjs.DailyFocusOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkXW7E34GTcjs.DailyFocusOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DailyFocusOrderByRelevanceInputSchema_default = DailyFocusOrderByRelevanceInputSchema;




exports.DailyFocusOrderByRelevanceInputSchema = DailyFocusOrderByRelevanceInputSchema; exports.DailyFocusOrderByRelevanceInputSchema_default = DailyFocusOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-6F5HCBP5.cjs.map
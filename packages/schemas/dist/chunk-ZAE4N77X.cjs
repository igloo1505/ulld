"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHWTVJMMGcjs = require('./chunk-HWTVJMMG.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkHWTVJMMGcjs.DietaryItemOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkHWTVJMMGcjs.DietaryItemOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DietaryItemOrderByRelevanceInputSchema_default = DietaryItemOrderByRelevanceInputSchema;




exports.DietaryItemOrderByRelevanceInputSchema = DietaryItemOrderByRelevanceInputSchema; exports.DietaryItemOrderByRelevanceInputSchema_default = DietaryItemOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-ZAE4N77X.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRT5RP7ULcjs = require('./chunk-RT5RP7UL.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkRT5RP7ULcjs.RandomImageOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkRT5RP7ULcjs.RandomImageOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var RandomImageOrderByRelevanceInputSchema_default = RandomImageOrderByRelevanceInputSchema;




exports.RandomImageOrderByRelevanceInputSchema = RandomImageOrderByRelevanceInputSchema; exports.RandomImageOrderByRelevanceInputSchema_default = RandomImageOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-R5GUNME6.cjs.map
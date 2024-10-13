"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO3UGHOOVcjs = require('./chunk-O3UGHOOV.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var DJTOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkO3UGHOOVcjs.DJTOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkO3UGHOOVcjs.DJTOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var DJTOrderByRelevanceInputSchema_default = DJTOrderByRelevanceInputSchema;




exports.DJTOrderByRelevanceInputSchema = DJTOrderByRelevanceInputSchema; exports.DJTOrderByRelevanceInputSchema_default = DJTOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-BYF6CSHZ.cjs.map
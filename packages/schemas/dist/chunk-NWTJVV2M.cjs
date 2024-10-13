"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR5GUNME6cjs = require('./chunk-R5GUNME6.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var RandomImageOrderByWithRelationInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkR5GUNME6cjs.RandomImageOrderByRelevanceInputSchema).optional()
}).strict();
var RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema;




exports.RandomImageOrderByWithRelationInputSchema = RandomImageOrderByWithRelationInputSchema; exports.RandomImageOrderByWithRelationInputSchema_default = RandomImageOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-NWTJVV2M.cjs.map
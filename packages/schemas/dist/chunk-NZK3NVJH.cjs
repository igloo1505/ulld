"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesMaxOrderByAggregateInputSchema_default = RelatedValuesMaxOrderByAggregateInputSchema;




exports.RelatedValuesMaxOrderByAggregateInputSchema = RelatedValuesMaxOrderByAggregateInputSchema; exports.RelatedValuesMaxOrderByAggregateInputSchema_default = RelatedValuesMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NZK3NVJH.cjs.map
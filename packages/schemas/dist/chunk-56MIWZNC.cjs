"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesMinOrderByAggregateInputSchema_default = RelatedValuesMinOrderByAggregateInputSchema;




exports.RelatedValuesMinOrderByAggregateInputSchema = RelatedValuesMinOrderByAggregateInputSchema; exports.RelatedValuesMinOrderByAggregateInputSchema_default = RelatedValuesMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-56MIWZNC.cjs.map
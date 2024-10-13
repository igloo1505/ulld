"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesSumOrderByAggregateInputSchema_default = RelatedValuesSumOrderByAggregateInputSchema;




exports.RelatedValuesSumOrderByAggregateInputSchema = RelatedValuesSumOrderByAggregateInputSchema; exports.RelatedValuesSumOrderByAggregateInputSchema_default = RelatedValuesSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TJDDWCDB.cjs.map
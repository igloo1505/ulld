"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema;




exports.RelatedValuesAvgOrderByAggregateInputSchema = RelatedValuesAvgOrderByAggregateInputSchema; exports.RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-YKNOY3VR.cjs.map
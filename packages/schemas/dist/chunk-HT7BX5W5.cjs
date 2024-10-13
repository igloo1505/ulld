"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesCountOrderByAggregateInputSchema_default = RelatedValuesCountOrderByAggregateInputSchema;




exports.RelatedValuesCountOrderByAggregateInputSchema = RelatedValuesCountOrderByAggregateInputSchema; exports.RelatedValuesCountOrderByAggregateInputSchema_default = RelatedValuesCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-HT7BX5W5.cjs.map
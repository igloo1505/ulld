"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var CitationsGroupMaxOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var CitationsGroupMaxOrderByAggregateInputSchema_default = CitationsGroupMaxOrderByAggregateInputSchema;




exports.CitationsGroupMaxOrderByAggregateInputSchema = CitationsGroupMaxOrderByAggregateInputSchema; exports.CitationsGroupMaxOrderByAggregateInputSchema_default = CitationsGroupMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-PXPZGK6T.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var CitationsGroupMinOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var CitationsGroupMinOrderByAggregateInputSchema_default = CitationsGroupMinOrderByAggregateInputSchema;




exports.CitationsGroupMinOrderByAggregateInputSchema = CitationsGroupMinOrderByAggregateInputSchema; exports.CitationsGroupMinOrderByAggregateInputSchema_default = CitationsGroupMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-SUNSRY34.cjs.map
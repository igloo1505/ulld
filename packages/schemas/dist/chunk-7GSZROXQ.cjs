"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var CitationsGroupCountOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var CitationsGroupCountOrderByAggregateInputSchema_default = CitationsGroupCountOrderByAggregateInputSchema;




exports.CitationsGroupCountOrderByAggregateInputSchema = CitationsGroupCountOrderByAggregateInputSchema; exports.CitationsGroupCountOrderByAggregateInputSchema_default = CitationsGroupCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7GSZROXQ.cjs.map
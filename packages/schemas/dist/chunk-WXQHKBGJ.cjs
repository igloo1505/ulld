"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DJTMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DJTMaxOrderByAggregateInputSchema_default = DJTMaxOrderByAggregateInputSchema;




exports.DJTMaxOrderByAggregateInputSchema = DJTMaxOrderByAggregateInputSchema; exports.DJTMaxOrderByAggregateInputSchema_default = DJTMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-WXQHKBGJ.cjs.map
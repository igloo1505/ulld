"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DJTMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DJTMinOrderByAggregateInputSchema_default = DJTMinOrderByAggregateInputSchema;




exports.DJTMinOrderByAggregateInputSchema = DJTMinOrderByAggregateInputSchema; exports.DJTMinOrderByAggregateInputSchema_default = DJTMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OVAHYEDQ.cjs.map
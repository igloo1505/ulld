"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DJTCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var DJTCountOrderByAggregateInputSchema_default = DJTCountOrderByAggregateInputSchema;




exports.DJTCountOrderByAggregateInputSchema = DJTCountOrderByAggregateInputSchema; exports.DJTCountOrderByAggregateInputSchema_default = DJTCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5UYBTB76.cjs.map
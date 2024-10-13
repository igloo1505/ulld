"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardMaxOrderByAggregateInputSchema_default = WhiteboardMaxOrderByAggregateInputSchema;




exports.WhiteboardMaxOrderByAggregateInputSchema = WhiteboardMaxOrderByAggregateInputSchema; exports.WhiteboardMaxOrderByAggregateInputSchema_default = WhiteboardMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MWZWE4BM.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardMinOrderByAggregateInputSchema_default = WhiteboardMinOrderByAggregateInputSchema;




exports.WhiteboardMinOrderByAggregateInputSchema = WhiteboardMinOrderByAggregateInputSchema; exports.WhiteboardMinOrderByAggregateInputSchema_default = WhiteboardMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IWBGR5YM.cjs.map
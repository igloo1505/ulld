"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var WhiteboardCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var WhiteboardCountOrderByAggregateInputSchema_default = WhiteboardCountOrderByAggregateInputSchema;




exports.WhiteboardCountOrderByAggregateInputSchema = WhiteboardCountOrderByAggregateInputSchema; exports.WhiteboardCountOrderByAggregateInputSchema_default = WhiteboardCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-FXM76FCO.cjs.map
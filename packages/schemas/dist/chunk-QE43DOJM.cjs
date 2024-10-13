"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFXM76FCOcjs = require('./chunk-FXM76FCO.cjs');


var _chunkIWBGR5YMcjs = require('./chunk-IWBGR5YM.cjs');


var _chunkMWZWE4BMcjs = require('./chunk-MWZWE4BM.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/WhiteboardOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var WhiteboardOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkFXM76FCOcjs.WhiteboardCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkMWZWE4BMcjs.WhiteboardMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIWBGR5YMcjs.WhiteboardMinOrderByAggregateInputSchema).optional()
}).strict();
var WhiteboardOrderByWithAggregationInputSchema_default = WhiteboardOrderByWithAggregationInputSchema;




exports.WhiteboardOrderByWithAggregationInputSchema = WhiteboardOrderByWithAggregationInputSchema; exports.WhiteboardOrderByWithAggregationInputSchema_default = WhiteboardOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-QE43DOJM.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIAEWGJIXcjs = require('./chunk-IAEWGJIX.cjs');


var _chunkOVAHYEDQcjs = require('./chunk-OVAHYEDQ.cjs');


var _chunkWXQHKBGJcjs = require('./chunk-WXQHKBGJ.cjs');


var _chunk5UYBTB76cjs = require('./chunk-5UYBTB76.cjs');


var _chunk6XTFKWG2cjs = require('./chunk-6XTFKWG2.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DJTOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DJTOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk5UYBTB76cjs.DJTCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkIAEWGJIXcjs.DJTAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkWXQHKBGJcjs.DJTMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOVAHYEDQcjs.DJTMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk6XTFKWG2cjs.DJTSumOrderByAggregateInputSchema).optional()
}).strict();
var DJTOrderByWithAggregationInputSchema_default = DJTOrderByWithAggregationInputSchema;




exports.DJTOrderByWithAggregationInputSchema = DJTOrderByWithAggregationInputSchema; exports.DJTOrderByWithAggregationInputSchema_default = DJTOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-O6H4XQHF.cjs.map
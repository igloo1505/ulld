"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3V6R37YRcjs = require('./chunk-3V6R37YR.cjs');


var _chunkLTVVEACBcjs = require('./chunk-LTVVEACB.cjs');


var _chunkCGCROKBXcjs = require('./chunk-CGCROKBX.cjs');


var _chunkE3AMAEK2cjs = require('./chunk-E3AMAEK2.cjs');


var _chunkXXJFCJDPcjs = require('./chunk-XXJFCJDP.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DJTOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var DJTOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkE3AMAEK2cjs.DJTCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk3V6R37YRcjs.DJTAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkCGCROKBXcjs.DJTMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkLTVVEACBcjs.DJTMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkXXJFCJDPcjs.DJTSumOrderByAggregateInputSchema).optional()
}).strict();
var DJTOrderByWithAggregationInputSchema_default = DJTOrderByWithAggregationInputSchema;




exports.DJTOrderByWithAggregationInputSchema = DJTOrderByWithAggregationInputSchema; exports.DJTOrderByWithAggregationInputSchema_default = DJTOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-WJ5SHSPB.cjs.map
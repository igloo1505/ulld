"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAXVB6P34cjs = require('./chunk-AXVB6P34.cjs');


var _chunkINBMXH7Fcjs = require('./chunk-INBMXH7F.cjs');


var _chunkIF2RWMSPcjs = require('./chunk-IF2RWMSP.cjs');


var _chunkRZ35VXHDcjs = require('./chunk-RZ35VXHD.cjs');


var _chunk5FOEPHJRcjs = require('./chunk-5FOEPHJR.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ServingOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkAXVB6P34cjs.ServingCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkINBMXH7Fcjs.ServingAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkRZ35VXHDcjs.ServingMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIF2RWMSPcjs.ServingMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk5FOEPHJRcjs.ServingSumOrderByAggregateInputSchema).optional()
}).strict();
var ServingOrderByWithAggregationInputSchema_default = ServingOrderByWithAggregationInputSchema;




exports.ServingOrderByWithAggregationInputSchema = ServingOrderByWithAggregationInputSchema; exports.ServingOrderByWithAggregationInputSchema_default = ServingOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-KKNC77BZ.cjs.map
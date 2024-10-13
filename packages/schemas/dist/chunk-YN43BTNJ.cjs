"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCIVOG5XUcjs = require('./chunk-CIVOG5XU.cjs');


var _chunk7VFNEE6Gcjs = require('./chunk-7VFNEE6G.cjs');


var _chunkUQYOADKPcjs = require('./chunk-UQYOADKP.cjs');


var _chunkOBFZYI5Ycjs = require('./chunk-OBFZYI5Y.cjs');


var _chunkK3MBDI3Pcjs = require('./chunk-K3MBDI3P.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ServingOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkCIVOG5XUcjs.ServingCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk7VFNEE6Gcjs.ServingAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkOBFZYI5Ycjs.ServingMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUQYOADKPcjs.ServingMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkK3MBDI3Pcjs.ServingSumOrderByAggregateInputSchema).optional()
}).strict();
var ServingOrderByWithAggregationInputSchema_default = ServingOrderByWithAggregationInputSchema;




exports.ServingOrderByWithAggregationInputSchema = ServingOrderByWithAggregationInputSchema; exports.ServingOrderByWithAggregationInputSchema_default = ServingOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-YN43BTNJ.cjs.map
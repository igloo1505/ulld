"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCOBIQXN6cjs = require('./chunk-COBIQXN6.cjs');


var _chunkVG5IHVRDcjs = require('./chunk-VG5IHVRD.cjs');


var _chunkWVRS2PTDcjs = require('./chunk-WVRS2PTD.cjs');


var _chunk5FC4YUWFcjs = require('./chunk-5FC4YUWF.cjs');


var _chunkAWAM66DUcjs = require('./chunk-AWAM66DU.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/EquationOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var EquationOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  variableLegend: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkCOBIQXN6cjs.EquationCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkVG5IHVRDcjs.EquationAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk5FC4YUWFcjs.EquationMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkWVRS2PTDcjs.EquationMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkAWAM66DUcjs.EquationSumOrderByAggregateInputSchema).optional()
}).strict();
var EquationOrderByWithAggregationInputSchema_default = EquationOrderByWithAggregationInputSchema;




exports.EquationOrderByWithAggregationInputSchema = EquationOrderByWithAggregationInputSchema; exports.EquationOrderByWithAggregationInputSchema_default = EquationOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-XBZDSBXJ.cjs.map
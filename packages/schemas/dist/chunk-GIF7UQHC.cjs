"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ2C5QKTOcjs = require('./chunk-J2C5QKTO.cjs');


var _chunkIBKREOHAcjs = require('./chunk-IBKREOHA.cjs');


var _chunkNV3LMAX2cjs = require('./chunk-NV3LMAX2.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkJ2C5QKTOcjs.CitationsGroupCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkNV3LMAX2cjs.CitationsGroupMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIBKREOHAcjs.CitationsGroupMinOrderByAggregateInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithAggregationInputSchema_default = CitationsGroupOrderByWithAggregationInputSchema;




exports.CitationsGroupOrderByWithAggregationInputSchema = CitationsGroupOrderByWithAggregationInputSchema; exports.CitationsGroupOrderByWithAggregationInputSchema_default = CitationsGroupOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-GIF7UQHC.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk54FTV3RGcjs = require('./chunk-54FTV3RG.cjs');


var _chunkWGGONYECcjs = require('./chunk-WGGONYEC.cjs');


var _chunkAA36A5F6cjs = require('./chunk-AA36A5F6.cjs');


var _chunkMZQZTLAOcjs = require('./chunk-MZQZTLAO.cjs');


var _chunkNCX3NUVYcjs = require('./chunk-NCX3NUVY.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TopicOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk54FTV3RGcjs.TopicCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkWGGONYECcjs.TopicAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkMZQZTLAOcjs.TopicMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkAA36A5F6cjs.TopicMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkNCX3NUVYcjs.TopicSumOrderByAggregateInputSchema).optional()
}).strict();
var TopicOrderByWithAggregationInputSchema_default = TopicOrderByWithAggregationInputSchema;




exports.TopicOrderByWithAggregationInputSchema = TopicOrderByWithAggregationInputSchema; exports.TopicOrderByWithAggregationInputSchema_default = TopicOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-F23XNCI4.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk765WE3DXcjs = require('./chunk-765WE3DX.cjs');


var _chunkFL5IIAZScjs = require('./chunk-FL5IIAZS.cjs');


var _chunkAKOQNP5Rcjs = require('./chunk-AKOQNP5R.cjs');


var _chunkPE4XJ4HScjs = require('./chunk-PE4XJ4HS.cjs');


var _chunkWLPVESGXcjs = require('./chunk-WLPVESGX.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TagOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk765WE3DXcjs.TagCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkFL5IIAZScjs.TagAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkPE4XJ4HScjs.TagMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkAKOQNP5Rcjs.TagMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkWLPVESGXcjs.TagSumOrderByAggregateInputSchema).optional()
}).strict();
var TagOrderByWithAggregationInputSchema_default = TagOrderByWithAggregationInputSchema;




exports.TagOrderByWithAggregationInputSchema = TagOrderByWithAggregationInputSchema; exports.TagOrderByWithAggregationInputSchema_default = TagOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-WDSN6HFN.cjs.map
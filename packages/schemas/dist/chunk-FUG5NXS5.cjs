"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP54UBSQIcjs = require('./chunk-P54UBSQI.cjs');


var _chunkZE4SHF5Ycjs = require('./chunk-ZE4SHF5Y.cjs');


var _chunk3VMB6N6Vcjs = require('./chunk-3VMB6N6V.cjs');


var _chunkOQWXICROcjs = require('./chunk-OQWXICRO.cjs');


var _chunkZFOV655Ucjs = require('./chunk-ZFOV655U.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TagOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TagOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkP54UBSQIcjs.TagCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkZE4SHF5Ycjs.TagAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkOQWXICROcjs.TagMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk3VMB6N6Vcjs.TagMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkZFOV655Ucjs.TagSumOrderByAggregateInputSchema).optional()
}).strict();
var TagOrderByWithAggregationInputSchema_default = TagOrderByWithAggregationInputSchema;




exports.TagOrderByWithAggregationInputSchema = TagOrderByWithAggregationInputSchema; exports.TagOrderByWithAggregationInputSchema_default = TagOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-FUG5NXS5.cjs.map
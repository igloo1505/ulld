"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7GSZROXQcjs = require('./chunk-7GSZROXQ.cjs');


var _chunkSUNSRY34cjs = require('./chunk-SUNSRY34.cjs');


var _chunkPXPZGK6Tcjs = require('./chunk-PXPZGK6T.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunk7GSZROXQcjs.CitationsGroupCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkPXPZGK6Tcjs.CitationsGroupMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkSUNSRY34cjs.CitationsGroupMinOrderByAggregateInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithAggregationInputSchema_default = CitationsGroupOrderByWithAggregationInputSchema;




exports.CitationsGroupOrderByWithAggregationInputSchema = CitationsGroupOrderByWithAggregationInputSchema; exports.CitationsGroupOrderByWithAggregationInputSchema_default = CitationsGroupOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-XP6UKEQK.cjs.map
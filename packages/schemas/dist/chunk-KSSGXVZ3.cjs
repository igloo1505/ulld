"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZ5KW24OQcjs = require('./chunk-Z5KW24OQ.cjs');


var _chunk7KCS5OTFcjs = require('./chunk-7KCS5OTF.cjs');


var _chunkLCQLYEB6cjs = require('./chunk-LCQLYEB6.cjs');


var _chunkO35LTM3Vcjs = require('./chunk-O35LTM3V.cjs');


var _chunkC7W7QUV5cjs = require('./chunk-C7W7QUV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SubjectOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SubjectOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk7KCS5OTFcjs.SubjectCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkZ5KW24OQcjs.SubjectAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkO35LTM3Vcjs.SubjectMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkLCQLYEB6cjs.SubjectMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkC7W7QUV5cjs.SubjectSumOrderByAggregateInputSchema).optional()
}).strict();
var SubjectOrderByWithAggregationInputSchema_default = SubjectOrderByWithAggregationInputSchema;




exports.SubjectOrderByWithAggregationInputSchema = SubjectOrderByWithAggregationInputSchema; exports.SubjectOrderByWithAggregationInputSchema_default = SubjectOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-KSSGXVZ3.cjs.map
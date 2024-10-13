"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOAQPOFATcjs = require('./chunk-OAQPOFAT.cjs');


var _chunkU4MTKNEXcjs = require('./chunk-U4MTKNEX.cjs');


var _chunkTNKQXCPQcjs = require('./chunk-TNKQXCPQ.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkOAQPOFATcjs.ReadingListCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkTNKQXCPQcjs.ReadingListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkU4MTKNEXcjs.ReadingListMinOrderByAggregateInputSchema).optional()
}).strict();
var ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema;




exports.ReadingListOrderByWithAggregationInputSchema = ReadingListOrderByWithAggregationInputSchema; exports.ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-LA4G4CRW.cjs.map
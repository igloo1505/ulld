"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCFTQE2WWcjs = require('./chunk-CFTQE2WW.cjs');


var _chunk7KX5Y2KJcjs = require('./chunk-7KX5Y2KJ.cjs');


var _chunk6ETMSFKRcjs = require('./chunk-6ETMSFKR.cjs');


var _chunkHLGTAQ3Bcjs = require('./chunk-HLGTAQ3B.cjs');


var _chunkXHYKFHNEcjs = require('./chunk-XHYKFHNE.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/QAPairOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var QAPairOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  correctCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkCFTQE2WWcjs.QAPairCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk7KX5Y2KJcjs.QAPairAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkHLGTAQ3Bcjs.QAPairMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk6ETMSFKRcjs.QAPairMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkXHYKFHNEcjs.QAPairSumOrderByAggregateInputSchema).optional()
}).strict();
var QAPairOrderByWithAggregationInputSchema_default = QAPairOrderByWithAggregationInputSchema;




exports.QAPairOrderByWithAggregationInputSchema = QAPairOrderByWithAggregationInputSchema; exports.QAPairOrderByWithAggregationInputSchema_default = QAPairOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-BTVLPI43.cjs.map
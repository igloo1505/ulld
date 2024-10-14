"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMQ3UJA5Ocjs = require('./chunk-MQ3UJA5O.cjs');


var _chunkGQOAP4FPcjs = require('./chunk-GQOAP4FP.cjs');


var _chunkJSTKJRMHcjs = require('./chunk-JSTKJRMH.cjs');


var _chunkE7Y3LLTQcjs = require('./chunk-E7Y3LLTQ.cjs');


var _chunk564JCFMCcjs = require('./chunk-564JCFMC.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/QAPairOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var QAPairOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  question: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  answer: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  correctCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  inCorrectCount: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkMQ3UJA5Ocjs.QAPairCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkGQOAP4FPcjs.QAPairAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkE7Y3LLTQcjs.QAPairMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkJSTKJRMHcjs.QAPairMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk564JCFMCcjs.QAPairSumOrderByAggregateInputSchema).optional()
}).strict();
var QAPairOrderByWithAggregationInputSchema_default = QAPairOrderByWithAggregationInputSchema;




exports.QAPairOrderByWithAggregationInputSchema = QAPairOrderByWithAggregationInputSchema; exports.QAPairOrderByWithAggregationInputSchema_default = QAPairOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-ZIP3BKDD.cjs.map
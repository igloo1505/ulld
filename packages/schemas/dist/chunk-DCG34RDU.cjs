"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkR2IMMHQ4cjs = require('./chunk-R2IMMHQ4.cjs');


var _chunkYHPAFW5Rcjs = require('./chunk-YHPAFW5R.cjs');


var _chunkTQFW6LSBcjs = require('./chunk-TQFW6LSB.cjs');


var _chunk3X5ZHARGcjs = require('./chunk-3X5ZHARG.cjs');


var _chunk6DN2HVGWcjs = require('./chunk-6DN2HVGW.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkR2IMMHQ4cjs.TimePeriodCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkYHPAFW5Rcjs.TimePeriodAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk3X5ZHARGcjs.TimePeriodMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkTQFW6LSBcjs.TimePeriodMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk6DN2HVGWcjs.TimePeriodSumOrderByAggregateInputSchema).optional()
}).strict();
var TimePeriodOrderByWithAggregationInputSchema_default = TimePeriodOrderByWithAggregationInputSchema;




exports.TimePeriodOrderByWithAggregationInputSchema = TimePeriodOrderByWithAggregationInputSchema; exports.TimePeriodOrderByWithAggregationInputSchema_default = TimePeriodOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-DCG34RDU.cjs.map
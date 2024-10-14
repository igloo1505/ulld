"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQOXOM7AFcjs = require('./chunk-QOXOM7AF.cjs');


var _chunkY4GS32Y6cjs = require('./chunk-Y4GS32Y6.cjs');


var _chunkGUFJN4ORcjs = require('./chunk-GUFJN4OR.cjs');


var _chunkWZAZCHEDcjs = require('./chunk-WZAZCHED.cjs');


var _chunkFAKMAE4Qcjs = require('./chunk-FAKMAE4Q.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkQOXOM7AFcjs.TimePeriodCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkY4GS32Y6cjs.TimePeriodAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkWZAZCHEDcjs.TimePeriodMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkGUFJN4ORcjs.TimePeriodMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkFAKMAE4Qcjs.TimePeriodSumOrderByAggregateInputSchema).optional()
}).strict();
var TimePeriodOrderByWithAggregationInputSchema_default = TimePeriodOrderByWithAggregationInputSchema;




exports.TimePeriodOrderByWithAggregationInputSchema = TimePeriodOrderByWithAggregationInputSchema; exports.TimePeriodOrderByWithAggregationInputSchema_default = TimePeriodOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-U4G24S5B.cjs.map
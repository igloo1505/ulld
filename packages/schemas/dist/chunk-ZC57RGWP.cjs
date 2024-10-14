"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIFAJO62Icjs = require('./chunk-IFAJO62I.cjs');


var _chunk2KS3C4WUcjs = require('./chunk-2KS3C4WU.cjs');


var _chunkIUV77TKVcjs = require('./chunk-IUV77TKV.cjs');


var _chunk55VWRHZYcjs = require('./chunk-55VWRHZY.cjs');


var _chunkDJ75VCJDcjs = require('./chunk-DJ75VCJD.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SubjectOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SubjectOrderByWithAggregationInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunk2KS3C4WUcjs.SubjectCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkIFAJO62Icjs.SubjectAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk55VWRHZYcjs.SubjectMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIUV77TKVcjs.SubjectMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkDJ75VCJDcjs.SubjectSumOrderByAggregateInputSchema).optional()
}).strict();
var SubjectOrderByWithAggregationInputSchema_default = SubjectOrderByWithAggregationInputSchema;




exports.SubjectOrderByWithAggregationInputSchema = SubjectOrderByWithAggregationInputSchema; exports.SubjectOrderByWithAggregationInputSchema_default = SubjectOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-ZC57RGWP.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYVCYCWSOcjs = require('./chunk-YVCYCWSO.cjs');


var _chunk43LX67AAcjs = require('./chunk-43LX67AA.cjs');


var _chunkSLVYAFKHcjs = require('./chunk-SLVYAFKH.cjs');


var _chunkPOSJN4RVcjs = require('./chunk-POSJN4RV.cjs');


var _chunkYBESGE6Scjs = require('./chunk-YBESGE6S.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/WaitlistRequestOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var WaitlistRequestOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  emailsSent: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkSLVYAFKHcjs.WaitlistRequestCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkPOSJN4RVcjs.WaitlistRequestAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk43LX67AAcjs.WaitlistRequestMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkYVCYCWSOcjs.WaitlistRequestMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkYBESGE6Scjs.WaitlistRequestSumOrderByAggregateInputSchema).optional()
}).strict();
var WaitlistRequestOrderByWithAggregationInputSchema_default = WaitlistRequestOrderByWithAggregationInputSchema;




exports.WaitlistRequestOrderByWithAggregationInputSchema = WaitlistRequestOrderByWithAggregationInputSchema; exports.WaitlistRequestOrderByWithAggregationInputSchema_default = WaitlistRequestOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-HL74LYOS.cjs.map
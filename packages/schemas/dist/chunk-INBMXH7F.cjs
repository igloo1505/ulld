"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ServingAvgOrderByAggregateInputSchema_default = ServingAvgOrderByAggregateInputSchema;




exports.ServingAvgOrderByAggregateInputSchema = ServingAvgOrderByAggregateInputSchema; exports.ServingAvgOrderByAggregateInputSchema_default = ServingAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-INBMXH7F.cjs.map
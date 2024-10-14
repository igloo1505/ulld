"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestMinOrderByAggregateInputSchema_default = FeatureRequestMinOrderByAggregateInputSchema;




exports.FeatureRequestMinOrderByAggregateInputSchema = FeatureRequestMinOrderByAggregateInputSchema; exports.FeatureRequestMinOrderByAggregateInputSchema_default = FeatureRequestMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-FUV7QPCC.cjs.map
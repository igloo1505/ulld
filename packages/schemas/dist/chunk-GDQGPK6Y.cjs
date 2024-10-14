"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  category: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  userBase: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestCountOrderByAggregateInputSchema_default = FeatureRequestCountOrderByAggregateInputSchema;




exports.FeatureRequestCountOrderByAggregateInputSchema = FeatureRequestCountOrderByAggregateInputSchema; exports.FeatureRequestCountOrderByAggregateInputSchema_default = FeatureRequestCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-GDQGPK6Y.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/FeatureRequestMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var FeatureRequestMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  receivedOn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var FeatureRequestMaxOrderByAggregateInputSchema_default = FeatureRequestMaxOrderByAggregateInputSchema;




exports.FeatureRequestMaxOrderByAggregateInputSchema = FeatureRequestMaxOrderByAggregateInputSchema; exports.FeatureRequestMaxOrderByAggregateInputSchema_default = FeatureRequestMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-EVY6DBAJ.cjs.map
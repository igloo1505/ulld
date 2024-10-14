"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ServingMinOrderByAggregateInputSchema_default = ServingMinOrderByAggregateInputSchema;




exports.ServingMinOrderByAggregateInputSchema = ServingMinOrderByAggregateInputSchema; exports.ServingMinOrderByAggregateInputSchema_default = ServingMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IF2RWMSP.cjs.map
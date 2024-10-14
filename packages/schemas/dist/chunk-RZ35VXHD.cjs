"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ServingMaxOrderByAggregateInputSchema_default = ServingMaxOrderByAggregateInputSchema;




exports.ServingMaxOrderByAggregateInputSchema = ServingMaxOrderByAggregateInputSchema; exports.ServingMaxOrderByAggregateInputSchema_default = ServingMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-RZ35VXHD.cjs.map
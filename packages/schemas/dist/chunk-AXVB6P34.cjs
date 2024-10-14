"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_guess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ServingCountOrderByAggregateInputSchema_default = ServingCountOrderByAggregateInputSchema;




exports.ServingCountOrderByAggregateInputSchema = ServingCountOrderByAggregateInputSchema; exports.ServingCountOrderByAggregateInputSchema_default = ServingCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AXVB6P34.cjs.map
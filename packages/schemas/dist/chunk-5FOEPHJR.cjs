"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ServingSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ServingSumOrderByAggregateInputSchema_default = ServingSumOrderByAggregateInputSchema;




exports.ServingSumOrderByAggregateInputSchema = ServingSumOrderByAggregateInputSchema; exports.ServingSumOrderByAggregateInputSchema_default = ServingSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-5FOEPHJR.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietaryItemSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietaryItemSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gi: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  calsPerOz: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietaryItemSumOrderByAggregateInputSchema_default = DietaryItemSumOrderByAggregateInputSchema;




exports.DietaryItemSumOrderByAggregateInputSchema = DietaryItemSumOrderByAggregateInputSchema; exports.DietaryItemSumOrderByAggregateInputSchema_default = DietaryItemSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-RZVP7SKK.cjs.map
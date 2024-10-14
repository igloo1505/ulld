"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietSumOrderByAggregateInputSchema = _zod.z.object({
  carb: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietSumOrderByAggregateInputSchema_default = DietSumOrderByAggregateInputSchema;




exports.DietSumOrderByAggregateInputSchema = DietSumOrderByAggregateInputSchema; exports.DietSumOrderByAggregateInputSchema_default = DietSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-U2XDP4TG.cjs.map
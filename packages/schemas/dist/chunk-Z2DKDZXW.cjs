"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DietAvgOrderByAggregateInputSchema = _zod.z.object({
  carb: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pro: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fat: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DietAvgOrderByAggregateInputSchema_default = DietAvgOrderByAggregateInputSchema;




exports.DietAvgOrderByAggregateInputSchema = DietAvgOrderByAggregateInputSchema; exports.DietAvgOrderByAggregateInputSchema_default = DietAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Z2DKDZXW.cjs.map
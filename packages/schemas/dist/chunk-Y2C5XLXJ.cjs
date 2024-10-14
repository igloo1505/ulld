"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageMaxOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RandomImageMaxOrderByAggregateInputSchema_default = RandomImageMaxOrderByAggregateInputSchema;




exports.RandomImageMaxOrderByAggregateInputSchema = RandomImageMaxOrderByAggregateInputSchema; exports.RandomImageMaxOrderByAggregateInputSchema_default = RandomImageMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-Y2C5XLXJ.cjs.map
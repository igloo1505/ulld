"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageCountOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema;




exports.RandomImageCountOrderByAggregateInputSchema = RandomImageCountOrderByAggregateInputSchema; exports.RandomImageCountOrderByAggregateInputSchema_default = RandomImageCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UOCDRJTD.cjs.map
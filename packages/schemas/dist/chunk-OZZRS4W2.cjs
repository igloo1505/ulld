"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RandomImageMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RandomImageMinOrderByAggregateInputSchema = _zod.z.object({
  path: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RandomImageMinOrderByAggregateInputSchema_default = RandomImageMinOrderByAggregateInputSchema;




exports.RandomImageMinOrderByAggregateInputSchema = RandomImageMinOrderByAggregateInputSchema; exports.RandomImageMinOrderByAggregateInputSchema_default = RandomImageMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-OZZRS4W2.cjs.map
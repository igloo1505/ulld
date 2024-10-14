"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/CitationsGroupMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var CitationsGroupMinOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var CitationsGroupMinOrderByAggregateInputSchema_default = CitationsGroupMinOrderByAggregateInputSchema;




exports.CitationsGroupMinOrderByAggregateInputSchema = CitationsGroupMinOrderByAggregateInputSchema; exports.CitationsGroupMinOrderByAggregateInputSchema_default = CitationsGroupMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IBKREOHA.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DJTMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DJTMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DJTMinOrderByAggregateInputSchema_default = DJTMinOrderByAggregateInputSchema;




exports.DJTMinOrderByAggregateInputSchema = DJTMinOrderByAggregateInputSchema; exports.DJTMinOrderByAggregateInputSchema_default = DJTMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-LTVVEACB.cjs.map
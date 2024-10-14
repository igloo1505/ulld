"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DJTCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var DJTCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var DJTCountOrderByAggregateInputSchema_default = DJTCountOrderByAggregateInputSchema;




exports.DJTCountOrderByAggregateInputSchema = DJTCountOrderByAggregateInputSchema; exports.DJTCountOrderByAggregateInputSchema_default = DJTCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-E3AMAEK2.cjs.map
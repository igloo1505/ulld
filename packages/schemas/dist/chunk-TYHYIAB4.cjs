"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesMaxOrderByAggregateInputSchema_default = RelatedValuesMaxOrderByAggregateInputSchema;




exports.RelatedValuesMaxOrderByAggregateInputSchema = RelatedValuesMaxOrderByAggregateInputSchema; exports.RelatedValuesMaxOrderByAggregateInputSchema_default = RelatedValuesMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-TYHYIAB4.cjs.map
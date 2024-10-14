"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesAvgOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesAvgOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema;




exports.RelatedValuesAvgOrderByAggregateInputSchema = RelatedValuesAvgOrderByAggregateInputSchema; exports.RelatedValuesAvgOrderByAggregateInputSchema_default = RelatedValuesAvgOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7U6VWOIT.cjs.map
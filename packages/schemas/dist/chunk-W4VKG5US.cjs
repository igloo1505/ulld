"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesSumOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesSumOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesSumOrderByAggregateInputSchema_default = RelatedValuesSumOrderByAggregateInputSchema;




exports.RelatedValuesSumOrderByAggregateInputSchema = RelatedValuesSumOrderByAggregateInputSchema; exports.RelatedValuesSumOrderByAggregateInputSchema_default = RelatedValuesSumOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-W4VKG5US.cjs.map
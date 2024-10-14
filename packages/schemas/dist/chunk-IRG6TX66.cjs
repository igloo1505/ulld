"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesMinOrderByAggregateInputSchema_default = RelatedValuesMinOrderByAggregateInputSchema;




exports.RelatedValuesMinOrderByAggregateInputSchema = RelatedValuesMinOrderByAggregateInputSchema; exports.RelatedValuesMinOrderByAggregateInputSchema_default = RelatedValuesMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IRG6TX66.cjs.map
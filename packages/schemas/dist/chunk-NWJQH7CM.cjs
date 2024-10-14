"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var RelatedValuesCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var RelatedValuesCountOrderByAggregateInputSchema_default = RelatedValuesCountOrderByAggregateInputSchema;




exports.RelatedValuesCountOrderByAggregateInputSchema = RelatedValuesCountOrderByAggregateInputSchema; exports.RelatedValuesCountOrderByAggregateInputSchema_default = RelatedValuesCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NWJQH7CM.cjs.map
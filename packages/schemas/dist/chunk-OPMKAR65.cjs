"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNWJQH7CMcjs = require('./chunk-NWJQH7CM.cjs');


var _chunk7U6VWOITcjs = require('./chunk-7U6VWOIT.cjs');


var _chunkTYHYIAB4cjs = require('./chunk-TYHYIAB4.cjs');


var _chunkIRG6TX66cjs = require('./chunk-IRG6TX66.cjs');


var _chunkW4VKG5UScjs = require('./chunk-W4VKG5US.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var RelatedValuesOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkNWJQH7CMcjs.RelatedValuesCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk7U6VWOITcjs.RelatedValuesAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkTYHYIAB4cjs.RelatedValuesMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIRG6TX66cjs.RelatedValuesMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkW4VKG5UScjs.RelatedValuesSumOrderByAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithAggregationInputSchema_default = RelatedValuesOrderByWithAggregationInputSchema;




exports.RelatedValuesOrderByWithAggregationInputSchema = RelatedValuesOrderByWithAggregationInputSchema; exports.RelatedValuesOrderByWithAggregationInputSchema_default = RelatedValuesOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-OPMKAR65.cjs.map
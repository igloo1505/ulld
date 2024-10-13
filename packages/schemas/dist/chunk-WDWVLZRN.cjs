"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHT7BX5W5cjs = require('./chunk-HT7BX5W5.cjs');


var _chunkYKNOY3VRcjs = require('./chunk-YKNOY3VR.cjs');


var _chunkNZK3NVJHcjs = require('./chunk-NZK3NVJH.cjs');


var _chunk56MIWZNCcjs = require('./chunk-56MIWZNC.cjs');


var _chunkTJDDWCDBcjs = require('./chunk-TJDDWCDB.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/RelatedValuesOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var RelatedValuesOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  input: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  output: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkHT7BX5W5cjs.RelatedValuesCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkYKNOY3VRcjs.RelatedValuesAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkNZK3NVJHcjs.RelatedValuesMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk56MIWZNCcjs.RelatedValuesMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkTJDDWCDBcjs.RelatedValuesSumOrderByAggregateInputSchema).optional()
}).strict();
var RelatedValuesOrderByWithAggregationInputSchema_default = RelatedValuesOrderByWithAggregationInputSchema;




exports.RelatedValuesOrderByWithAggregationInputSchema = RelatedValuesOrderByWithAggregationInputSchema; exports.RelatedValuesOrderByWithAggregationInputSchema_default = RelatedValuesOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-WDWVLZRN.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBQFD6LTWcjs = require('./chunk-BQFD6LTW.cjs');


var _chunkUYWIJZZUcjs = require('./chunk-UYWIJZZU.cjs');


var _chunkJCJEZDHDcjs = require('./chunk-JCJEZDHD.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkBQFD6LTWcjs.ReadingListCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkJCJEZDHDcjs.ReadingListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUYWIJZZUcjs.ReadingListMinOrderByAggregateInputSchema).optional()
}).strict();
var ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema;




exports.ReadingListOrderByWithAggregationInputSchema = ReadingListOrderByWithAggregationInputSchema; exports.ReadingListOrderByWithAggregationInputSchema_default = ReadingListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-6EBO7IP4.cjs.map
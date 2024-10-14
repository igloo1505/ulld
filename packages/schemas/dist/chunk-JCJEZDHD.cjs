"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListMaxOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema;




exports.ReadingListMaxOrderByAggregateInputSchema = ReadingListMaxOrderByAggregateInputSchema; exports.ReadingListMaxOrderByAggregateInputSchema_default = ReadingListMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-JCJEZDHD.cjs.map
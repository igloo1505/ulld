"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListCountOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ReadingListCountOrderByAggregateInputSchema_default = ReadingListCountOrderByAggregateInputSchema;




exports.ReadingListCountOrderByAggregateInputSchema = ReadingListCountOrderByAggregateInputSchema; exports.ReadingListCountOrderByAggregateInputSchema_default = ReadingListCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-BQFD6LTW.cjs.map
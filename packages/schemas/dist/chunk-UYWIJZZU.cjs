"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var ReadingListMinOrderByAggregateInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var ReadingListMinOrderByAggregateInputSchema_default = ReadingListMinOrderByAggregateInputSchema;




exports.ReadingListMinOrderByAggregateInputSchema = ReadingListMinOrderByAggregateInputSchema; exports.ReadingListMinOrderByAggregateInputSchema_default = ReadingListMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UYWIJZZU.cjs.map
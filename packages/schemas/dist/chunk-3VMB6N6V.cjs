"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TagMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TagMinOrderByAggregateInputSchema_default = TagMinOrderByAggregateInputSchema;




exports.TagMinOrderByAggregateInputSchema = TagMinOrderByAggregateInputSchema; exports.TagMinOrderByAggregateInputSchema_default = TagMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-3VMB6N6V.cjs.map
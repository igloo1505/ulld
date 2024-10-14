"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TopicMaxOrderByAggregateInputSchema_default = TopicMaxOrderByAggregateInputSchema;




exports.TopicMaxOrderByAggregateInputSchema = TopicMaxOrderByAggregateInputSchema; exports.TopicMaxOrderByAggregateInputSchema_default = TopicMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-MZQZTLAO.cjs.map
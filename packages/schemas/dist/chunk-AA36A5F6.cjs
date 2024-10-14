"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TopicMinOrderByAggregateInputSchema_default = TopicMinOrderByAggregateInputSchema;




exports.TopicMinOrderByAggregateInputSchema = TopicMinOrderByAggregateInputSchema; exports.TopicMinOrderByAggregateInputSchema_default = TopicMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AA36A5F6.cjs.map
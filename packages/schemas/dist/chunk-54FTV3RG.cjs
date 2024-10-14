"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TopicCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TopicCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TopicCountOrderByAggregateInputSchema_default = TopicCountOrderByAggregateInputSchema;




exports.TopicCountOrderByAggregateInputSchema = TopicCountOrderByAggregateInputSchema; exports.TopicCountOrderByAggregateInputSchema_default = TopicCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-54FTV3RG.cjs.map
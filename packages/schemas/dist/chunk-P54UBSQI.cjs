"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TagCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema;




exports.TagCountOrderByAggregateInputSchema = TagCountOrderByAggregateInputSchema; exports.TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-P54UBSQI.cjs.map
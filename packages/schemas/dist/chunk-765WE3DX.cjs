"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TagCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var TagCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema;




exports.TagCountOrderByAggregateInputSchema = TagCountOrderByAggregateInputSchema; exports.TagCountOrderByAggregateInputSchema_default = TagCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-765WE3DX.cjs.map
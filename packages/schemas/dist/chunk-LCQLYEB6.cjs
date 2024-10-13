"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SubjectMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SubjectMinOrderByAggregateInputSchema_default = SubjectMinOrderByAggregateInputSchema;




exports.SubjectMinOrderByAggregateInputSchema = SubjectMinOrderByAggregateInputSchema; exports.SubjectMinOrderByAggregateInputSchema_default = SubjectMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-LCQLYEB6.cjs.map
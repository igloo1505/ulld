"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SubjectCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SubjectCountOrderByAggregateInputSchema_default = SubjectCountOrderByAggregateInputSchema;




exports.SubjectCountOrderByAggregateInputSchema = SubjectCountOrderByAggregateInputSchema; exports.SubjectCountOrderByAggregateInputSchema_default = SubjectCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-7KCS5OTF.cjs.map
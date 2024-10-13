"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SubjectMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var SubjectMaxOrderByAggregateInputSchema_default = SubjectMaxOrderByAggregateInputSchema;




exports.SubjectMaxOrderByAggregateInputSchema = SubjectMaxOrderByAggregateInputSchema; exports.SubjectMaxOrderByAggregateInputSchema_default = SubjectMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-O35LTM3V.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SubjectMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectMaxOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SubjectMaxOrderByAggregateInputSchema_default = SubjectMaxOrderByAggregateInputSchema;




exports.SubjectMaxOrderByAggregateInputSchema = SubjectMaxOrderByAggregateInputSchema; exports.SubjectMaxOrderByAggregateInputSchema_default = SubjectMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-55VWRHZY.cjs.map
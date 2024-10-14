"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SubjectCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectCountOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SubjectCountOrderByAggregateInputSchema_default = SubjectCountOrderByAggregateInputSchema;




exports.SubjectCountOrderByAggregateInputSchema = SubjectCountOrderByAggregateInputSchema; exports.SubjectCountOrderByAggregateInputSchema_default = SubjectCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-2KS3C4WU.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SubjectMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SubjectMinOrderByAggregateInputSchema = _zod.z.object({
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  kanbanId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SubjectMinOrderByAggregateInputSchema_default = SubjectMinOrderByAggregateInputSchema;




exports.SubjectMinOrderByAggregateInputSchema = SubjectMinOrderByAggregateInputSchema; exports.SubjectMinOrderByAggregateInputSchema_default = SubjectMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-IUV77TKV.cjs.map
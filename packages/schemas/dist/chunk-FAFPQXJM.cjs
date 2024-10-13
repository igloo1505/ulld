"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BusinessContactCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BusinessContactCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  phone: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  purpose: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BusinessContactCountOrderByAggregateInputSchema_default = BusinessContactCountOrderByAggregateInputSchema;




exports.BusinessContactCountOrderByAggregateInputSchema = BusinessContactCountOrderByAggregateInputSchema; exports.BusinessContactCountOrderByAggregateInputSchema_default = BusinessContactCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-FAFPQXJM.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BusinessContactMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BusinessContactMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  companyName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactName: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  contactPreference: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  phone: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  message: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  purpose: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BusinessContactMaxOrderByAggregateInputSchema_default = BusinessContactMaxOrderByAggregateInputSchema;




exports.BusinessContactMaxOrderByAggregateInputSchema = BusinessContactMaxOrderByAggregateInputSchema; exports.BusinessContactMaxOrderByAggregateInputSchema_default = BusinessContactMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-HNRSA3YG.cjs.map
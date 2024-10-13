"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var IpynbMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  raw: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var IpynbMaxOrderByAggregateInputSchema_default = IpynbMaxOrderByAggregateInputSchema;




exports.IpynbMaxOrderByAggregateInputSchema = IpynbMaxOrderByAggregateInputSchema; exports.IpynbMaxOrderByAggregateInputSchema_default = IpynbMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-2UMU7BTJ.cjs.map
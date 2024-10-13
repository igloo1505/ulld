"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietSummaryKey: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  noteType: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  formatted: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  imageSrc: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  floatImages: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  remoteUrl: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  trackRemote: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quickLink: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteMaxOrderByAggregateInputSchema_default = MdxNoteMaxOrderByAggregateInputSchema;




exports.MdxNoteMaxOrderByAggregateInputSchema = MdxNoteMaxOrderByAggregateInputSchema; exports.MdxNoteMaxOrderByAggregateInputSchema_default = MdxNoteMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-QLZ2JJH7.cjs.map
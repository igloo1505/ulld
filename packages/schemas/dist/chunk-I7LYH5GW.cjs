"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/MdxNoteMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var MdxNoteMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietSummaryKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  noteType: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  formatted: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  imageSrc: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  sequentialIndex: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  floatImages: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  remoteUrl: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  trackRemote: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quickLink: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bookmarked: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var MdxNoteMaxOrderByAggregateInputSchema_default = MdxNoteMaxOrderByAggregateInputSchema;




exports.MdxNoteMaxOrderByAggregateInputSchema = MdxNoteMaxOrderByAggregateInputSchema; exports.MdxNoteMaxOrderByAggregateInputSchema_default = MdxNoteMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-I7LYH5GW.cjs.map
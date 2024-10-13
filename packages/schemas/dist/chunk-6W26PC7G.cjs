"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFERYWNC5cjs = require('./chunk-FERYWNC5.cjs');


var _chunkISREGFHMcjs = require('./chunk-ISREGFHM.cjs');


var _chunkOM7XSMCTcjs = require('./chunk-OM7XSMCT.cjs');


var _chunkQLZ2JJH7cjs = require('./chunk-QLZ2JJH7.cjs');


var _chunkMIIKDCKHcjs = require('./chunk-MIIKDCKH.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var MdxNoteOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  dietSummaryKey: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  noteType: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  formatted: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  imageSrc: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  href: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  floatImages: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  remoteUrl: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  trackRemote: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quickLink: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkFERYWNC5cjs.MdxNoteCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkISREGFHMcjs.MdxNoteAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQLZ2JJH7cjs.MdxNoteMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkOM7XSMCTcjs.MdxNoteMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkMIIKDCKHcjs.MdxNoteSumOrderByAggregateInputSchema).optional()
}).strict();
var MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema;




exports.MdxNoteOrderByWithAggregationInputSchema = MdxNoteOrderByWithAggregationInputSchema; exports.MdxNoteOrderByWithAggregationInputSchema_default = MdxNoteOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-6W26PC7G.cjs.map
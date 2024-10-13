"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/BibEntryMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibEntryMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  BibId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  OwnWork: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  ColleaguesWork: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  read: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  htmlCitation: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  PdfPath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  address: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  annote: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  booktitle: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  chapter: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  crossref: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  doi: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  edition: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  editor: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  howpublished: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  institution: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  journal: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  month: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  note: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  number: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  organization: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pages: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  publisher: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  school: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  series: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  volume: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  year: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  numpages: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  url: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  issue: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  issn: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  abstract: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  urldate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  copyright: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var BibEntryMinOrderByAggregateInputSchema_default = BibEntryMinOrderByAggregateInputSchema;




exports.BibEntryMinOrderByAggregateInputSchema = BibEntryMinOrderByAggregateInputSchema; exports.BibEntryMinOrderByAggregateInputSchema_default = BibEntryMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AH674SMT.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/BibEntryCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var BibEntryCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  BibId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  OwnWork: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  ColleaguesWork: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  read: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  htmlCitation: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  PdfPath: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  address: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  annote: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  author: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  booktitle: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  chapter: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  crossref: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  doi: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  edition: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  editor: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  email: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  howpublished: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  institution: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  journal: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  month: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  note: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  number: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  organization: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pages: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  publisher: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  school: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  series: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  title: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  volume: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  year: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  numpages: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  url: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  issue: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  issn: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  abstract: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  urldate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  copyright: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var BibEntryCountOrderByAggregateInputSchema_default = BibEntryCountOrderByAggregateInputSchema;




exports.BibEntryCountOrderByAggregateInputSchema = BibEntryCountOrderByAggregateInputSchema; exports.BibEntryCountOrderByAggregateInputSchema_default = BibEntryCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-HGF33FNQ.cjs.map
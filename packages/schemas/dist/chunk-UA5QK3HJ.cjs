"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGZZ2PFBGcjs = require('./chunk-GZZ2PFBG.cjs');


var _chunk7QTX6CWPcjs = require('./chunk-7QTX6CWP.cjs');


var _chunkXMXSNRFYcjs = require('./chunk-XMXSNRFY.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/IpynbOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var IpynbOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  rootRelativePath: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  citationsListOrder: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  href: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  raw: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  bookmarked: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  firstSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastSync: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema).optional(),
  readingList: _zod.z.lazy(() => _chunk7QTX6CWPcjs.ReadingListOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkGZZ2PFBGcjs.IpynbOrderByRelevanceInputSchema).optional()
}).strict();
var IpynbOrderByWithRelationInputSchema_default = IpynbOrderByWithRelationInputSchema;




exports.IpynbOrderByWithRelationInputSchema = IpynbOrderByWithRelationInputSchema; exports.IpynbOrderByWithRelationInputSchema_default = IpynbOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-UA5QK3HJ.cjs.map
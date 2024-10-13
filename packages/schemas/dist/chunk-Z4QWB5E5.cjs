"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3QTG7UZScjs = require('./chunk-3QTG7UZS.cjs');


var _chunkJR3PPHH6cjs = require('./chunk-JR3PPHH6.cjs');


var _chunk7QTX6CWPcjs = require('./chunk-7QTX6CWP.cjs');


var _chunkXMXSNRFYcjs = require('./chunk-XMXSNRFY.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunk2BCAHLSYcjs = require('./chunk-2BCAHLSY.cjs');


var _chunkPFR3DM6Ocjs = require('./chunk-PFR3DM6O.cjs');


var _chunk2NUTEBGMcjs = require('./chunk-2NUTEBGM.cjs');


var _chunkAOJNAYJ6cjs = require('./chunk-AOJNAYJ6.cjs');


var _chunkGHATGBV5cjs = require('./chunk-GHATGBV5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var MdxNoteOrderByWithRelationInputSchema = _zod.z.object({
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
  topics: _zod.z.lazy(() => _chunkGHATGBV5cjs.TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: _zod.z.lazy(() => _chunk2NUTEBGMcjs.SubjectOrderByRelationAggregateInputSchema).optional(),
  tags: _zod.z.lazy(() => _chunkAOJNAYJ6cjs.TagOrderByRelationAggregateInputSchema).optional(),
  citations: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: _zod.z.lazy(() => _chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema).optional(),
  ReadingList: _zod.z.lazy(() => _chunk7QTX6CWPcjs.ReadingListOrderByRelationAggregateInputSchema).optional(),
  equations: _zod.z.lazy(() => _chunk2BCAHLSYcjs.EquationOrderByRelationAggregateInputSchema).optional(),
  definitions: _zod.z.lazy(() => _chunk3QTG7UZScjs.DefinitionOrderByRelationAggregateInputSchema).optional(),
  toDo: _zod.z.lazy(() => _chunkPFR3DM6Ocjs.ToDoOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkJR3PPHH6cjs.MdxNoteOrderByRelevanceInputSchema).optional()
}).strict();
var MdxNoteOrderByWithRelationInputSchema_default = MdxNoteOrderByWithRelationInputSchema;




exports.MdxNoteOrderByWithRelationInputSchema = MdxNoteOrderByWithRelationInputSchema; exports.MdxNoteOrderByWithRelationInputSchema_default = MdxNoteOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-Z4QWB5E5.cjs.map
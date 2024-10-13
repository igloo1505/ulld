"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM4KXIQLVcjs = require('./chunk-M4KXIQLV.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunkTLP7GBT6cjs = require('./chunk-TLP7GBT6.cjs');


var _chunkWFX3WPX4cjs = require('./chunk-WFX3WPX4.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkWFX3WPX4cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkTLP7GBT6cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkM4KXIQLVcjs.ReadingListOrderByRelevanceInputSchema).optional()
}).strict();
var ReadingListOrderByWithRelationInputSchema_default = ReadingListOrderByWithRelationInputSchema;




exports.ReadingListOrderByWithRelationInputSchema = ReadingListOrderByWithRelationInputSchema; exports.ReadingListOrderByWithRelationInputSchema_default = ReadingListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-R6FT6PEE.cjs.map
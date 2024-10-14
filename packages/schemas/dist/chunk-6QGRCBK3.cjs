"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX7KMDTBMcjs = require('./chunk-X7KMDTBM.cjs');


var _chunk5ICBN4HXcjs = require('./chunk-5ICBN4HX.cjs');


var _chunkF5EPMKX4cjs = require('./chunk-F5EPMKX4.cjs');


var _chunkMGQZW2V6cjs = require('./chunk-MGQZW2V6.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ReadingListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ReadingListOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  bibEntries: _zod.z.lazy(() => _chunk5ICBN4HXcjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  mdxNotes: _zod.z.lazy(() => _chunkMGQZW2V6cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => _chunkF5EPMKX4cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkX7KMDTBMcjs.ReadingListOrderByRelevanceInputSchema).optional()
}).strict();
var ReadingListOrderByWithRelationInputSchema_default = ReadingListOrderByWithRelationInputSchema;




exports.ReadingListOrderByWithRelationInputSchema = ReadingListOrderByWithRelationInputSchema; exports.ReadingListOrderByWithRelationInputSchema_default = ReadingListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-6QGRCBK3.cjs.map
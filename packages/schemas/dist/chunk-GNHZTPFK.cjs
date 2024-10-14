"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkS2NO5WC6cjs = require('./chunk-S2NO5WC6.cjs');


var _chunkCUON643Hcjs = require('./chunk-CUON643H.cjs');





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkRV6ENYGOcjs = require('./chunk-RV6ENYGO.cjs');

// src/database/outputTypeSchemas/ReadingListCreateArgsSchema.ts
var _zod = require('zod');
var ReadingListSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkRV6ENYGOcjs.ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListCreateArgsSchema = _zod.z.object({
  select: ReadingListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ReadingListIncludeSchema.optional(),
  data: _zod.z.union([_chunkS2NO5WC6cjs.ReadingListCreateInputSchema, _chunkCUON643Hcjs.ReadingListUncheckedCreateInputSchema])
}).strict();
var ReadingListCreateArgsSchema_default = ReadingListCreateArgsSchema;





exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListCreateArgsSchema = ReadingListCreateArgsSchema; exports.ReadingListCreateArgsSchema_default = ReadingListCreateArgsSchema_default;
//# sourceMappingURL=chunk-GNHZTPFK.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkY3NGQAIXcjs = require('./chunk-Y3NGQAIX.cjs');


var _chunkJN4RGGQQcjs = require('./chunk-JN4RGGQQ.cjs');


var _chunkJKJBNDGFcjs = require('./chunk-JKJBNDGF.cjs');


var _chunkZCEJNSCVcjs = require('./chunk-ZCEJNSCV.cjs');





var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBXDUF2KZcjs = require('./chunk-BXDUF2KZ.cjs');


var _chunkUMEFHZSZcjs = require('./chunk-UMEFHZSZ.cjs');

// src/database/outputTypeSchemas/ReadingListUpsertArgsSchema.ts
var _zod = require('zod');
var ReadingListSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  bibEntries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.BibEntryFindManyArgsSchema)]).optional(),
  mdxNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  ipynbNotes: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkBXDUF2KZcjs.ReadingListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ReadingListUpsertArgsSchema = _zod.z.object({
  select: ReadingListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ReadingListIncludeSchema.optional(),
  where: _chunkUMEFHZSZcjs.ReadingListWhereUniqueInputSchema,
  create: _zod.z.union([_chunkY3NGQAIXcjs.ReadingListCreateInputSchema, _chunkJN4RGGQQcjs.ReadingListUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkZCEJNSCVcjs.ReadingListUpdateInputSchema, _chunkJKJBNDGFcjs.ReadingListUncheckedUpdateInputSchema])
}).strict();
var ReadingListUpsertArgsSchema_default = ReadingListUpsertArgsSchema;





exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListUpsertArgsSchema = ReadingListUpsertArgsSchema; exports.ReadingListUpsertArgsSchema_default = ReadingListUpsertArgsSchema_default;
//# sourceMappingURL=chunk-AMSX7EKU.cjs.map
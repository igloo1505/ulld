"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkBXDUF2KZcjs = require('./chunk-BXDUF2KZ.cjs');


var _chunkR6FT6PEEcjs = require('./chunk-R6FT6PEE.cjs');


var _chunkUMEFHZSZcjs = require('./chunk-UMEFHZSZ.cjs');


var _chunkCGFNKABMcjs = require('./chunk-CGFNKABM.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ReadingListFindFirstOrThrowArgsSchema.ts
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
var ReadingListFindFirstOrThrowArgsSchema = _zod.z.object({
  select: ReadingListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.ReadingListIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkR6FT6PEEcjs.ReadingListOrderByWithRelationInputSchema.array(), _chunkR6FT6PEEcjs.ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkUMEFHZSZcjs.ReadingListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkCGFNKABMcjs.ReadingListScalarFieldEnumSchema, _chunkCGFNKABMcjs.ReadingListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ReadingListFindFirstOrThrowArgsSchema_default = ReadingListFindFirstOrThrowArgsSchema;





exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListFindFirstOrThrowArgsSchema = ReadingListFindFirstOrThrowArgsSchema; exports.ReadingListFindFirstOrThrowArgsSchema_default = ReadingListFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-VWN442RO.cjs.map
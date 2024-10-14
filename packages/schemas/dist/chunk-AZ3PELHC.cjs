"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkRV6ENYGOcjs = require('./chunk-RV6ENYGO.cjs');


var _chunk6QGRCBK3cjs = require('./chunk-6QGRCBK3.cjs');


var _chunkL6PAM4FLcjs = require('./chunk-L6PAM4FL.cjs');


var _chunkKPOVJN7Dcjs = require('./chunk-KPOVJN7D.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ReadingListFindFirstOrThrowArgsSchema.ts
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
var ReadingListFindFirstOrThrowArgsSchema = _zod.z.object({
  select: ReadingListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ReadingListIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.ReadingListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk6QGRCBK3cjs.ReadingListOrderByWithRelationInputSchema.array(), _chunk6QGRCBK3cjs.ReadingListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkL6PAM4FLcjs.ReadingListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkKPOVJN7Dcjs.ReadingListScalarFieldEnumSchema, _chunkKPOVJN7Dcjs.ReadingListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ReadingListFindFirstOrThrowArgsSchema_default = ReadingListFindFirstOrThrowArgsSchema;





exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListFindFirstOrThrowArgsSchema = ReadingListFindFirstOrThrowArgsSchema; exports.ReadingListFindFirstOrThrowArgsSchema_default = ReadingListFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-AZ3PELHC.cjs.map
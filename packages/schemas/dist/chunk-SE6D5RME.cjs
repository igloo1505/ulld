"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZC65SMW7cjs = require('./chunk-ZC65SMW7.cjs');


var _chunkPSGRIDBUcjs = require('./chunk-PSGRIDBU.cjs');





var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkRV6ENYGOcjs = require('./chunk-RV6ENYGO.cjs');


var _chunkL6PAM4FLcjs = require('./chunk-L6PAM4FL.cjs');

// src/database/outputTypeSchemas/ReadingListUpdateArgsSchema.ts
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
var ReadingListUpdateArgsSchema = _zod.z.object({
  select: ReadingListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.ReadingListIncludeSchema.optional(),
  data: _zod.z.union([_chunkPSGRIDBUcjs.ReadingListUpdateInputSchema, _chunkZC65SMW7cjs.ReadingListUncheckedUpdateInputSchema]),
  where: _chunkL6PAM4FLcjs.ReadingListWhereUniqueInputSchema
}).strict();
var ReadingListUpdateArgsSchema_default = ReadingListUpdateArgsSchema;





exports.ReadingListSelectSchema = ReadingListSelectSchema; exports.ReadingListUpdateArgsSchema = ReadingListUpdateArgsSchema; exports.ReadingListUpdateArgsSchema_default = ReadingListUpdateArgsSchema_default;
//# sourceMappingURL=chunk-SE6D5RME.cjs.map
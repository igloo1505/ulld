"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIZU26MLDcjs = require('./chunk-IZU26MLD.cjs');


var _chunkP2A4W5ZGcjs = require('./chunk-P2A4W5ZG.cjs');


var _chunk4XNPKMETcjs = require('./chunk-4XNPKMET.cjs');


var _chunkDMS6OPALcjs = require('./chunk-DMS6OPAL.cjs');


var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkV3R4WN7Wcjs = require('./chunk-V3R4WN7W.cjs');

// src/database/outputTypeSchemas/BibUpsertArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkV3R4WN7Wcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibUpsertArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.BibIncludeSchema.optional(),
  where: _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema,
  create: _zod.z.union([_chunkIZU26MLDcjs.BibCreateInputSchema, _chunkP2A4W5ZGcjs.BibUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk4XNPKMETcjs.BibUpdateInputSchema, _chunkDMS6OPALcjs.BibUncheckedUpdateInputSchema])
}).strict();
var BibUpsertArgsSchema_default = BibUpsertArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibUpsertArgsSchema = BibUpsertArgsSchema; exports.BibUpsertArgsSchema_default = BibUpsertArgsSchema_default;
//# sourceMappingURL=chunk-3K6DAZ5P.cjs.map
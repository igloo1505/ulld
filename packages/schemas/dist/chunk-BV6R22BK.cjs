"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkV3R4WN7Wcjs = require('./chunk-V3R4WN7W.cjs');

// src/database/outputTypeSchemas/BibFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkV3R4WN7Wcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.BibIncludeSchema.optional(),
  where: _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema
}).strict();
var BibFindUniqueOrThrowArgsSchema_default = BibFindUniqueOrThrowArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibFindUniqueOrThrowArgsSchema = BibFindUniqueOrThrowArgsSchema; exports.BibFindUniqueOrThrowArgsSchema_default = BibFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-BV6R22BK.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK5TAAY2Pcjs = require('./chunk-K5TAAY2P.cjs');


var _chunkM2TTZGTPcjs = require('./chunk-M2TTZGTP.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkV3R4WN7Wcjs = require('./chunk-V3R4WN7W.cjs');


var _chunk5EIKIXA7cjs = require('./chunk-5EIKIXA7.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/BibFindFirstArgsSchema.ts
var _zod = require('zod');
var BibSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  filename: _zod.z.boolean().optional(),
  firstSync: _zod.z.boolean().optional(),
  lastSync: _zod.z.boolean().optional(),
  entries: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.BibEntryFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkV3R4WN7Wcjs.BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindFirstArgsSchema = _zod.z.object({
  select: BibSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.BibIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5EIKIXA7cjs.BibOrderByWithRelationInputSchema.array(), _chunk5EIKIXA7cjs.BibOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkM2TTZGTPcjs.BibWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkK5TAAY2Pcjs.BibScalarFieldEnumSchema, _chunkK5TAAY2Pcjs.BibScalarFieldEnumSchema.array()]).optional()
}).strict();
var BibFindFirstArgsSchema_default = BibFindFirstArgsSchema;





exports.BibSelectSchema = BibSelectSchema; exports.BibFindFirstArgsSchema = BibFindFirstArgsSchema; exports.BibFindFirstArgsSchema_default = BibFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-YQRZUDK3.cjs.map
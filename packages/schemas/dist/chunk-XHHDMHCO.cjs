"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZCXSAD2Acjs = require('./chunk-ZCXSAD2A.cjs');


var _chunkBF6MITAGcjs = require('./chunk-BF6MITAG.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk3MFRRMX7cjs = require('./chunk-3MFRRMX7.cjs');


var _chunkJDJGOI3Ycjs = require('./chunk-JDJGOI3Y.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/SequentialNoteListFindManyArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkJDJGOI3Ycjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindManyArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SequentialNoteListIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk3MFRRMX7cjs.SequentialNoteListOrderByWithRelationInputSchema.array(), _chunk3MFRRMX7cjs.SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkBF6MITAGcjs.SequentialNoteListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkZCXSAD2Acjs.SequentialNoteListScalarFieldEnumSchema, _chunkZCXSAD2Acjs.SequentialNoteListScalarFieldEnumSchema.array()]).optional()
}).strict();
var SequentialNoteListFindManyArgsSchema_default = SequentialNoteListFindManyArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListFindManyArgsSchema = SequentialNoteListFindManyArgsSchema; exports.SequentialNoteListFindManyArgsSchema_default = SequentialNoteListFindManyArgsSchema_default;
//# sourceMappingURL=chunk-XHHDMHCO.cjs.map
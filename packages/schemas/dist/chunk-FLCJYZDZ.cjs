"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2HM34ZP2cjs = require('./chunk-2HM34ZP2.cjs');


var _chunkJGMA6CBGcjs = require('./chunk-JGMA6CBG.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkXMXSNRFYcjs = require('./chunk-XMXSNRFY.cjs');


var _chunk4EHRMD4Ecjs = require('./chunk-4EHRMD4E.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/SequentialNoteListFindFirstArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4EHRMD4Ecjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindFirstArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SequentialNoteListIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema.array(), _chunkXMXSNRFYcjs.SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkJGMA6CBGcjs.SequentialNoteListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk2HM34ZP2cjs.SequentialNoteListScalarFieldEnumSchema, _chunk2HM34ZP2cjs.SequentialNoteListScalarFieldEnumSchema.array()]).optional()
}).strict();
var SequentialNoteListFindFirstArgsSchema_default = SequentialNoteListFindFirstArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListFindFirstArgsSchema = SequentialNoteListFindFirstArgsSchema; exports.SequentialNoteListFindFirstArgsSchema_default = SequentialNoteListFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-FLCJYZDZ.cjs.map
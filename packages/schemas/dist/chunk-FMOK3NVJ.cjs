"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJGMA6CBGcjs = require('./chunk-JGMA6CBG.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk4EHRMD4Ecjs = require('./chunk-4EHRMD4E.cjs');

// src/database/outputTypeSchemas/SequentialNoteListFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4EHRMD4Ecjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SequentialNoteListIncludeSchema.optional(),
  where: _chunkJGMA6CBGcjs.SequentialNoteListWhereUniqueInputSchema
}).strict();
var SequentialNoteListFindUniqueOrThrowArgsSchema_default = SequentialNoteListFindUniqueOrThrowArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListFindUniqueOrThrowArgsSchema = SequentialNoteListFindUniqueOrThrowArgsSchema; exports.SequentialNoteListFindUniqueOrThrowArgsSchema_default = SequentialNoteListFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-FMOK3NVJ.cjs.map
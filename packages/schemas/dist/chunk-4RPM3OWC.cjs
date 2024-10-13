"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMNSSBB6Wcjs = require('./chunk-MNSSBB6W.cjs');


var _chunkKDN6R4HWcjs = require('./chunk-KDN6R4HW.cjs');


var _chunkJGMA6CBGcjs = require('./chunk-JGMA6CBG.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk4EHRMD4Ecjs = require('./chunk-4EHRMD4E.cjs');

// src/database/outputTypeSchemas/SequentialNoteListUpdateArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4EHRMD4Ecjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListUpdateArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SequentialNoteListIncludeSchema.optional(),
  data: _zod.z.union([_chunkMNSSBB6Wcjs.SequentialNoteListUpdateInputSchema, _chunkKDN6R4HWcjs.SequentialNoteListUncheckedUpdateInputSchema]),
  where: _chunkJGMA6CBGcjs.SequentialNoteListWhereUniqueInputSchema
}).strict();
var SequentialNoteListUpdateArgsSchema_default = SequentialNoteListUpdateArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListUpdateArgsSchema = SequentialNoteListUpdateArgsSchema; exports.SequentialNoteListUpdateArgsSchema_default = SequentialNoteListUpdateArgsSchema_default;
//# sourceMappingURL=chunk-4RPM3OWC.cjs.map
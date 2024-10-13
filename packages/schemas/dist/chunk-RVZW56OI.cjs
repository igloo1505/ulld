"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAZX3COPBcjs = require('./chunk-AZX3COPB.cjs');


var _chunkJ54UGIONcjs = require('./chunk-J54UGION.cjs');




var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk4EHRMD4Ecjs = require('./chunk-4EHRMD4E.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4EHRMD4Ecjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListCreateArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.SequentialNoteListIncludeSchema.optional(),
  data: _zod.z.union([_chunkAZX3COPBcjs.SequentialNoteListCreateInputSchema, _chunkJ54UGIONcjs.SequentialNoteListUncheckedCreateInputSchema])
}).strict();
var SequentialNoteListCreateArgsSchema_default = SequentialNoteListCreateArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListCreateArgsSchema = SequentialNoteListCreateArgsSchema; exports.SequentialNoteListCreateArgsSchema_default = SequentialNoteListCreateArgsSchema_default;
//# sourceMappingURL=chunk-RVZW56OI.cjs.map
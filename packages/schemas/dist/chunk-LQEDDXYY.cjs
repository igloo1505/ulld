"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBY3UO7ODcjs = require('./chunk-BY3UO7OD.cjs');


var _chunkYSDPBJJAcjs = require('./chunk-YSDPBJJA.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkJDJGOI3Ycjs = require('./chunk-JDJGOI3Y.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkJDJGOI3Ycjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListCreateArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SequentialNoteListIncludeSchema.optional(),
  data: _zod.z.union([_chunkBY3UO7ODcjs.SequentialNoteListCreateInputSchema, _chunkYSDPBJJAcjs.SequentialNoteListUncheckedCreateInputSchema])
}).strict();
var SequentialNoteListCreateArgsSchema_default = SequentialNoteListCreateArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListCreateArgsSchema = SequentialNoteListCreateArgsSchema; exports.SequentialNoteListCreateArgsSchema_default = SequentialNoteListCreateArgsSchema_default;
//# sourceMappingURL=chunk-LQEDDXYY.cjs.map
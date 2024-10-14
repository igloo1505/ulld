"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBF6MITAGcjs = require('./chunk-BF6MITAG.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkJDJGOI3Ycjs = require('./chunk-JDJGOI3Y.cjs');

// src/database/outputTypeSchemas/SequentialNoteListDeleteArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkJDJGOI3Ycjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListDeleteArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SequentialNoteListIncludeSchema.optional(),
  where: _chunkBF6MITAGcjs.SequentialNoteListWhereUniqueInputSchema
}).strict();
var SequentialNoteListDeleteArgsSchema_default = SequentialNoteListDeleteArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListDeleteArgsSchema = SequentialNoteListDeleteArgsSchema; exports.SequentialNoteListDeleteArgsSchema_default = SequentialNoteListDeleteArgsSchema_default;
//# sourceMappingURL=chunk-YWQOIILR.cjs.map
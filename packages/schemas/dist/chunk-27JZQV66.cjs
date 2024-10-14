"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBY3UO7ODcjs = require('./chunk-BY3UO7OD.cjs');


var _chunkYSDPBJJAcjs = require('./chunk-YSDPBJJA.cjs');


var _chunk5BJBSE7Jcjs = require('./chunk-5BJBSE7J.cjs');


var _chunk7Z7PAJYOcjs = require('./chunk-7Z7PAJYO.cjs');


var _chunkBF6MITAGcjs = require('./chunk-BF6MITAG.cjs');




var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkJDJGOI3Ycjs = require('./chunk-JDJGOI3Y.cjs');

// src/database/outputTypeSchemas/SequentialNoteListUpsertArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListSelectSchema = _zod.z.object({
  sequentialKey: _zod.z.boolean().optional(),
  MdxNote: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.IpynbFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkJDJGOI3Ycjs.SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListUpsertArgsSchema = _zod.z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.SequentialNoteListIncludeSchema.optional(),
  where: _chunkBF6MITAGcjs.SequentialNoteListWhereUniqueInputSchema,
  create: _zod.z.union([_chunkBY3UO7ODcjs.SequentialNoteListCreateInputSchema, _chunkYSDPBJJAcjs.SequentialNoteListUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunk5BJBSE7Jcjs.SequentialNoteListUpdateInputSchema, _chunk7Z7PAJYOcjs.SequentialNoteListUncheckedUpdateInputSchema])
}).strict();
var SequentialNoteListUpsertArgsSchema_default = SequentialNoteListUpsertArgsSchema;





exports.SequentialNoteListSelectSchema = SequentialNoteListSelectSchema; exports.SequentialNoteListUpsertArgsSchema = SequentialNoteListUpsertArgsSchema; exports.SequentialNoteListUpsertArgsSchema_default = SequentialNoteListUpsertArgsSchema_default;
//# sourceMappingURL=chunk-27JZQV66.cjs.map
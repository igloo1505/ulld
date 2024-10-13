"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema.ts
var _zod = require('zod');
var SequentialNoteListWhereUniqueInputSchema = _zod.z.object({
  sequentialKey: _zod.z.string()
}).and(_zod.z.object({
  sequentialKey: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema), _zod.z.lazy(() => _chunkXQKVAOTYcjs.SequentialNoteListWhereInputSchema).array()]).optional(),
  MdxNote: _zod.z.lazy(() => _chunkXQKVAOTYcjs.MdxNoteListRelationFilterSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkXQKVAOTYcjs.IpynbListRelationFilterSchema).optional()
}).strict());
var SequentialNoteListWhereUniqueInputSchema_default = SequentialNoteListWhereUniqueInputSchema;




exports.SequentialNoteListWhereUniqueInputSchema = SequentialNoteListWhereUniqueInputSchema; exports.SequentialNoteListWhereUniqueInputSchema_default = SequentialNoteListWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-JGMA6CBG.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIVOPVFNAcjs = require('./chunk-IVOPVFNA.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateManyArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIVOPVFNAcjs.SequentialNoteListCreateManyInputSchema, _chunkIVOPVFNAcjs.SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyArgsSchema_default = SequentialNoteListCreateManyArgsSchema;




exports.SequentialNoteListCreateManyArgsSchema = SequentialNoteListCreateManyArgsSchema; exports.SequentialNoteListCreateManyArgsSchema_default = SequentialNoteListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-YWCRFP2H.cjs.map
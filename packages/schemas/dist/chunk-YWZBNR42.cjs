"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIVOPVFNAcjs = require('./chunk-IVOPVFNA.cjs');

// src/database/outputTypeSchemas/SequentialNoteListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SequentialNoteListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkIVOPVFNAcjs.SequentialNoteListCreateManyInputSchema, _chunkIVOPVFNAcjs.SequentialNoteListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SequentialNoteListCreateManyAndReturnArgsSchema_default = SequentialNoteListCreateManyAndReturnArgsSchema;




exports.SequentialNoteListCreateManyAndReturnArgsSchema = SequentialNoteListCreateManyAndReturnArgsSchema; exports.SequentialNoteListCreateManyAndReturnArgsSchema_default = SequentialNoteListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-YWZBNR42.cjs.map
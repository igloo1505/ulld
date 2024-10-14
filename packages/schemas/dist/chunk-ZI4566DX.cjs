"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQH2NMHSNcjs = require('./chunk-QH2NMHSN.cjs');


var _chunkHTNPJEZTcjs = require('./chunk-HTNPJEZT.cjs');


var _chunk7QDGTUEQcjs = require('./chunk-7QDGTUEQ.cjs');

// src/database/outputTypeSchemas/NoteTypeUpdateManyArgsSchema.ts
var _zod = require('zod');
var NoteTypeUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkQH2NMHSNcjs.NoteTypeUpdateManyMutationInputSchema, _chunkHTNPJEZTcjs.NoteTypeUncheckedUpdateManyInputSchema]),
  where: _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema.optional()
}).strict();
var NoteTypeUpdateManyArgsSchema_default = NoteTypeUpdateManyArgsSchema;




exports.NoteTypeUpdateManyArgsSchema = NoteTypeUpdateManyArgsSchema; exports.NoteTypeUpdateManyArgsSchema_default = NoteTypeUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZI4566DX.cjs.map
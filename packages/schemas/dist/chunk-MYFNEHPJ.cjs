"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVZ3TWEZXcjs = require('./chunk-VZ3TWEZX.cjs');

// src/database/outputTypeSchemas/KanbanCreateManyArgsSchema.ts
var _zod = require('zod');
var KanbanCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVZ3TWEZXcjs.KanbanCreateManyInputSchema, _chunkVZ3TWEZXcjs.KanbanCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanbanCreateManyArgsSchema_default = KanbanCreateManyArgsSchema;




exports.KanbanCreateManyArgsSchema = KanbanCreateManyArgsSchema; exports.KanbanCreateManyArgsSchema_default = KanbanCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-MYFNEHPJ.cjs.map
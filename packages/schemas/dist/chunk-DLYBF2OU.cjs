"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVZ3TWEZXcjs = require('./chunk-VZ3TWEZX.cjs');

// src/database/outputTypeSchemas/KanbanCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanbanCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVZ3TWEZXcjs.KanbanCreateManyInputSchema, _chunkVZ3TWEZXcjs.KanbanCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanbanCreateManyAndReturnArgsSchema_default = KanbanCreateManyAndReturnArgsSchema;




exports.KanbanCreateManyAndReturnArgsSchema = KanbanCreateManyAndReturnArgsSchema; exports.KanbanCreateManyAndReturnArgsSchema_default = KanbanCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-DLYBF2OU.cjs.map
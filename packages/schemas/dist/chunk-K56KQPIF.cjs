"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRHUAHCNVcjs = require('./chunk-RHUAHCNV.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoUpdateManyArgsSchema.ts
var _zod = require('zod');
var ToDoUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema, _chunkRHUAHCNVcjs.ToDoUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.ToDoWhereInputSchema.optional()
}).strict();
var ToDoUpdateManyArgsSchema_default = ToDoUpdateManyArgsSchema;




exports.ToDoUpdateManyArgsSchema = ToDoUpdateManyArgsSchema; exports.ToDoUpdateManyArgsSchema_default = ToDoUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-K56KQPIF.cjs.map
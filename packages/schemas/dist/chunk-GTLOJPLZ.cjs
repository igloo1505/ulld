"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRXPI6HLCcjs = require('./chunk-RXPI6HLC.cjs');

// src/database/outputTypeSchemas/ToDoListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ToDoListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRXPI6HLCcjs.ToDoListCreateManyInputSchema, _chunkRXPI6HLCcjs.ToDoListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoListCreateManyAndReturnArgsSchema_default = ToDoListCreateManyAndReturnArgsSchema;




exports.ToDoListCreateManyAndReturnArgsSchema = ToDoListCreateManyAndReturnArgsSchema; exports.ToDoListCreateManyAndReturnArgsSchema_default = ToDoListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-GTLOJPLZ.cjs.map
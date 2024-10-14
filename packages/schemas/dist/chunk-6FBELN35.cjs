"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDXLATYAXcjs = require('./chunk-DXLATYAX.cjs');

// src/database/outputTypeSchemas/ToDoListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ToDoListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkDXLATYAXcjs.ToDoListCreateManyInputSchema, _chunkDXLATYAXcjs.ToDoListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoListCreateManyAndReturnArgsSchema_default = ToDoListCreateManyAndReturnArgsSchema;




exports.ToDoListCreateManyAndReturnArgsSchema = ToDoListCreateManyAndReturnArgsSchema; exports.ToDoListCreateManyAndReturnArgsSchema_default = ToDoListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-6FBELN35.cjs.map
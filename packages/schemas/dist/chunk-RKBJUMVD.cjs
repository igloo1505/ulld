"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDXLATYAXcjs = require('./chunk-DXLATYAX.cjs');

// src/database/outputTypeSchemas/ToDoListCreateManyArgsSchema.ts
var _zod = require('zod');
var ToDoListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkDXLATYAXcjs.ToDoListCreateManyInputSchema, _chunkDXLATYAXcjs.ToDoListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoListCreateManyArgsSchema_default = ToDoListCreateManyArgsSchema;




exports.ToDoListCreateManyArgsSchema = ToDoListCreateManyArgsSchema; exports.ToDoListCreateManyArgsSchema_default = ToDoListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-RKBJUMVD.cjs.map
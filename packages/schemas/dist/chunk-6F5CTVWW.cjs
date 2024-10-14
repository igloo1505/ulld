"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGUD2TRXTcjs = require('./chunk-GUD2TRXT.cjs');

// src/database/outputTypeSchemas/ToDoCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ToDoCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGUD2TRXTcjs.ToDoCreateManyInputSchema, _chunkGUD2TRXTcjs.ToDoCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyAndReturnArgsSchema_default = ToDoCreateManyAndReturnArgsSchema;




exports.ToDoCreateManyAndReturnArgsSchema = ToDoCreateManyAndReturnArgsSchema; exports.ToDoCreateManyAndReturnArgsSchema_default = ToDoCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-6F5CTVWW.cjs.map
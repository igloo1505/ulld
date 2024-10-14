"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGUD2TRXTcjs = require('./chunk-GUD2TRXT.cjs');

// src/database/outputTypeSchemas/ToDoCreateManyArgsSchema.ts
var _zod = require('zod');
var ToDoCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGUD2TRXTcjs.ToDoCreateManyInputSchema, _chunkGUD2TRXTcjs.ToDoCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyArgsSchema_default = ToDoCreateManyArgsSchema;




exports.ToDoCreateManyArgsSchema = ToDoCreateManyArgsSchema; exports.ToDoCreateManyArgsSchema_default = ToDoCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-UAIBVEU7.cjs.map
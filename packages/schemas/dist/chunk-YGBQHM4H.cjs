"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7WP2SFIFcjs = require('./chunk-7WP2SFIF.cjs');

// src/database/outputTypeSchemas/ToDoCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ToDoCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7WP2SFIFcjs.ToDoCreateManyInputSchema, _chunk7WP2SFIFcjs.ToDoCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyAndReturnArgsSchema_default = ToDoCreateManyAndReturnArgsSchema;




exports.ToDoCreateManyAndReturnArgsSchema = ToDoCreateManyAndReturnArgsSchema; exports.ToDoCreateManyAndReturnArgsSchema_default = ToDoCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-YGBQHM4H.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7WP2SFIFcjs = require('./chunk-7WP2SFIF.cjs');

// src/database/outputTypeSchemas/ToDoCreateManyArgsSchema.ts
var _zod = require('zod');
var ToDoCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7WP2SFIFcjs.ToDoCreateManyInputSchema, _chunk7WP2SFIFcjs.ToDoCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ToDoCreateManyArgsSchema_default = ToDoCreateManyArgsSchema;




exports.ToDoCreateManyArgsSchema = ToDoCreateManyArgsSchema; exports.ToDoCreateManyArgsSchema_default = ToDoCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-VP2U2SPI.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSTXSH4P6cjs = require('./chunk-STXSH4P6.cjs');


var _chunk2MUBIUA6cjs = require('./chunk-2MUBIUA6.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ToDoListUpdateManyArgsSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2MUBIUA6cjs.ToDoListUpdateManyMutationInputSchema, _chunkSTXSH4P6cjs.ToDoListUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.ToDoListWhereInputSchema.optional()
}).strict();
var ToDoListUpdateManyArgsSchema_default = ToDoListUpdateManyArgsSchema;




exports.ToDoListUpdateManyArgsSchema = ToDoListUpdateManyArgsSchema; exports.ToDoListUpdateManyArgsSchema_default = ToDoListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-57QZ2PYM.cjs.map
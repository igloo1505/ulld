"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkRUBIKCMBcjs = require('./chunk-RUBIKCMB.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoUpdateManyArgsSchema.ts
var _zod = require('zod');
var ToDoUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema, _chunkRUBIKCMBcjs.ToDoUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.ToDoWhereInputSchema.optional()
}).strict();
var ToDoUpdateManyArgsSchema_default = ToDoUpdateManyArgsSchema;




exports.ToDoUpdateManyArgsSchema = ToDoUpdateManyArgsSchema; exports.ToDoUpdateManyArgsSchema_default = ToDoUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-4UDMLIZB.cjs.map
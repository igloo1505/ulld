"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkCHK2XSXNcjs = require('./chunk-CHK2XSXN.cjs');


var _chunkCHDZPTPLcjs = require('./chunk-CHDZPTPL.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ToDoListUpdateManyArgsSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkCHDZPTPLcjs.ToDoListUpdateManyMutationInputSchema, _chunkCHK2XSXNcjs.ToDoListUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.ToDoListWhereInputSchema.optional()
}).strict();
var ToDoListUpdateManyArgsSchema_default = ToDoListUpdateManyArgsSchema;




exports.ToDoListUpdateManyArgsSchema = ToDoListUpdateManyArgsSchema; exports.ToDoListUpdateManyArgsSchema_default = ToDoListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-FYB7WCTW.cjs.map
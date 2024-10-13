"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWSG2L7T6cjs = require('./chunk-WSG2L7T6.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutToDoListInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkWSG2L7T6cjs.ToDoUncheckedUpdateManyWithoutToDoListInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default = ToDoUpdateManyWithWhereWithoutToDoListInputSchema;




exports.ToDoUpdateManyWithWhereWithoutToDoListInputSchema = ToDoUpdateManyWithWhereWithoutToDoListInputSchema; exports.ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default = ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default;
//# sourceMappingURL=chunk-IPMWPNFG.cjs.map
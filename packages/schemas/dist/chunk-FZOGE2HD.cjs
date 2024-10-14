"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk73CG2VU3cjs = require('./chunk-73CG2VU3.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutToDoListInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk73CG2VU3cjs.ToDoUncheckedUpdateManyWithoutToDoListInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default = ToDoUpdateManyWithWhereWithoutToDoListInputSchema;




exports.ToDoUpdateManyWithWhereWithoutToDoListInputSchema = ToDoUpdateManyWithWhereWithoutToDoListInputSchema; exports.ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default = ToDoUpdateManyWithWhereWithoutToDoListInputSchema_default;
//# sourceMappingURL=chunk-FZOGE2HD.cjs.map
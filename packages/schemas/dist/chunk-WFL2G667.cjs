"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUAZRLCAUcjs = require('./chunk-UAZRLCAU.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutParentInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutParentInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkUAZRLCAUcjs.ToDoUncheckedUpdateManyWithoutParentInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutParentInputSchema_default = ToDoUpdateManyWithWhereWithoutParentInputSchema;




exports.ToDoUpdateManyWithWhereWithoutParentInputSchema = ToDoUpdateManyWithWhereWithoutParentInputSchema; exports.ToDoUpdateManyWithWhereWithoutParentInputSchema_default = ToDoUpdateManyWithWhereWithoutParentInputSchema_default;
//# sourceMappingURL=chunk-WFL2G667.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJE5JFNIUcjs = require('./chunk-JE5JFNIU.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutParentInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutParentInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkJE5JFNIUcjs.ToDoUncheckedUpdateManyWithoutParentInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutParentInputSchema_default = ToDoUpdateManyWithWhereWithoutParentInputSchema;




exports.ToDoUpdateManyWithWhereWithoutParentInputSchema = ToDoUpdateManyWithWhereWithoutParentInputSchema; exports.ToDoUpdateManyWithWhereWithoutParentInputSchema_default = ToDoUpdateManyWithWhereWithoutParentInputSchema_default;
//# sourceMappingURL=chunk-ME2C54OC.cjs.map
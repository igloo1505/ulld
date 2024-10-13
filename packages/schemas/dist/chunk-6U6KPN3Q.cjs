"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLDFWD5OAcjs = require('./chunk-LDFWD5OA.cjs');


var _chunkMX4UNEJJcjs = require('./chunk-MX4UNEJJ.cjs');


var _chunkPP2DVWWYcjs = require('./chunk-PP2DVWWY.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMX4UNEJJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkPP2DVWWYcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkLDFWD5OAcjs.ToDoUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutSubjectsInputSchema = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema; exports.ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-6U6KPN3Q.cjs.map
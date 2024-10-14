"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMU2CDV4Hcjs = require('./chunk-MU2CDV4H.cjs');


var _chunkF6G4GA6Fcjs = require('./chunk-F6G4GA6F.cjs');


var _chunk2MUBIUA6cjs = require('./chunk-2MUBIUA6.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkF6G4GA6Fcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2MUBIUA6cjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkMU2CDV4Hcjs.ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-SKDGSCJL.cjs.map
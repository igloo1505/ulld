"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMGNUYNEVcjs = require('./chunk-MGNUYNEV.cjs');


var _chunkF6G4GA6Fcjs = require('./chunk-F6G4GA6F.cjs');


var _chunk2MUBIUA6cjs = require('./chunk-2MUBIUA6.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkF6G4GA6Fcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2MUBIUA6cjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkMGNUYNEVcjs.ToDoListUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutTopicsInputSchema = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-2DUUT45P.cjs.map
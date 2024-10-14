"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE3TKWXDIcjs = require('./chunk-E3TKWXDI.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTopicsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkE3TKWXDIcjs.ToDoUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutTopicsInputSchema = ToDoUpdateManyWithWhereWithoutTopicsInputSchema; exports.ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default;
//# sourceMappingURL=chunk-4DB6IKCM.cjs.map
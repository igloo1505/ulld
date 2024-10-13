"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMG3ZEGIUcjs = require('./chunk-MG3ZEGIU.cjs');


var _chunkQWZS2Y4Wcjs = require('./chunk-QWZS2Y4W.cjs');


var _chunkCHDZPTPLcjs = require('./chunk-CHDZPTPL.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkQWZS2Y4Wcjs.ToDoListScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCHDZPTPLcjs.ToDoListUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkMG3ZEGIUcjs.ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema; exports.ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoListUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-QK6Q2NMF.cjs.map
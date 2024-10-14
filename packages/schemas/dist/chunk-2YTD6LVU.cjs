"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHUR2RGDCcjs = require('./chunk-HUR2RGDC.cjs');


var _chunkK7N6ENCJcjs = require('./chunk-K7N6ENCJ.cjs');


var _chunkVEBBFDQGcjs = require('./chunk-VEBBFDQG.cjs');

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkK7N6ENCJcjs.ToDoScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkVEBBFDQGcjs.ToDoUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkHUR2RGDCcjs.ToDoUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.ToDoUpdateManyWithWhereWithoutSubjectsInputSchema = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema; exports.ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default = ToDoUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-2YTD6LVU.cjs.map
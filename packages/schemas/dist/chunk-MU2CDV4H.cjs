"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');


var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema_default = ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema;




exports.ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema = ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema; exports.ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema_default = ToDoListUncheckedUpdateManyWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-MU2CDV4H.cjs.map
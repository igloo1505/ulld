"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4HCQC4XGcjs = require('./chunk-4HCQC4XG.cjs');


var _chunkI5XF7I5Vcjs = require('./chunk-I5XF7I5V.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyMutationInputSchema = _zod.z.object({
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkI5XF7I5Vcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk4HCQC4XGcjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ToDoListUpdateManyMutationInputSchema_default = ToDoListUpdateManyMutationInputSchema;




exports.ToDoListUpdateManyMutationInputSchema = ToDoListUpdateManyMutationInputSchema; exports.ToDoListUpdateManyMutationInputSchema_default = ToDoListUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-2MUBIUA6.cjs.map
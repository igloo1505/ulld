"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/ToDoListUpdateManyMutationInputSchema.ts
var _zod = require('zod');
var ToDoListUpdateManyMutationInputSchema = _zod.z.object({
  label: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var ToDoListUpdateManyMutationInputSchema_default = ToDoListUpdateManyMutationInputSchema;




exports.ToDoListUpdateManyMutationInputSchema = ToDoListUpdateManyMutationInputSchema; exports.ToDoListUpdateManyMutationInputSchema_default = ToDoListUpdateManyMutationInputSchema_default;
//# sourceMappingURL=chunk-CHDZPTPL.cjs.map
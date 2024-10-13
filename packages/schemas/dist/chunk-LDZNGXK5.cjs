"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NullableIntFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var NullableIntFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.number().optional().nullable(),
  increment: _zod.z.number().optional(),
  decrement: _zod.z.number().optional(),
  multiply: _zod.z.number().optional(),
  divide: _zod.z.number().optional()
}).strict();
var NullableIntFieldUpdateOperationsInputSchema_default = NullableIntFieldUpdateOperationsInputSchema;




exports.NullableIntFieldUpdateOperationsInputSchema = NullableIntFieldUpdateOperationsInputSchema; exports.NullableIntFieldUpdateOperationsInputSchema_default = NullableIntFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-LDZNGXK5.cjs.map
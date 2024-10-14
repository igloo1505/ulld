"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NullableFloatFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var NullableFloatFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.number().optional().nullable(),
  increment: _zod.z.number().optional(),
  decrement: _zod.z.number().optional(),
  multiply: _zod.z.number().optional(),
  divide: _zod.z.number().optional()
}).strict();
var NullableFloatFieldUpdateOperationsInputSchema_default = NullableFloatFieldUpdateOperationsInputSchema;




exports.NullableFloatFieldUpdateOperationsInputSchema = NullableFloatFieldUpdateOperationsInputSchema; exports.NullableFloatFieldUpdateOperationsInputSchema_default = NullableFloatFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-E6WNRJ6F.cjs.map
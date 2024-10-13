"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/IntFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var IntFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.number().optional(),
  increment: _zod.z.number().optional(),
  decrement: _zod.z.number().optional(),
  multiply: _zod.z.number().optional(),
  divide: _zod.z.number().optional()
}).strict();
var IntFieldUpdateOperationsInputSchema_default = IntFieldUpdateOperationsInputSchema;




exports.IntFieldUpdateOperationsInputSchema = IntFieldUpdateOperationsInputSchema; exports.IntFieldUpdateOperationsInputSchema_default = IntFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-X2HWIL4A.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/FloatFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var FloatFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.number().optional(),
  increment: _zod.z.number().optional(),
  decrement: _zod.z.number().optional(),
  multiply: _zod.z.number().optional(),
  divide: _zod.z.number().optional()
}).strict();
var FloatFieldUpdateOperationsInputSchema_default = FloatFieldUpdateOperationsInputSchema;




exports.FloatFieldUpdateOperationsInputSchema = FloatFieldUpdateOperationsInputSchema; exports.FloatFieldUpdateOperationsInputSchema_default = FloatFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-T67QX5PG.cjs.map
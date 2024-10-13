"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DateTimeFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var DateTimeFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.coerce.date().optional()
}).strict();
var DateTimeFieldUpdateOperationsInputSchema_default = DateTimeFieldUpdateOperationsInputSchema;




exports.DateTimeFieldUpdateOperationsInputSchema = DateTimeFieldUpdateOperationsInputSchema; exports.DateTimeFieldUpdateOperationsInputSchema_default = DateTimeFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-6JWX7MA3.cjs.map
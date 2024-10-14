"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/NullableDateTimeFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var NullableDateTimeFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.coerce.date().optional().nullable()
}).strict();
var NullableDateTimeFieldUpdateOperationsInputSchema_default = NullableDateTimeFieldUpdateOperationsInputSchema;




exports.NullableDateTimeFieldUpdateOperationsInputSchema = NullableDateTimeFieldUpdateOperationsInputSchema; exports.NullableDateTimeFieldUpdateOperationsInputSchema_default = NullableDateTimeFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-QURZBTO7.cjs.map
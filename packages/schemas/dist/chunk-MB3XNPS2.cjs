"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/BytesFieldUpdateOperationsInputSchema.ts
var _zod = require('zod');
var BytesFieldUpdateOperationsInputSchema = _zod.z.object({
  set: _zod.z.instanceof(Buffer).optional()
}).strict();
var BytesFieldUpdateOperationsInputSchema_default = BytesFieldUpdateOperationsInputSchema;




exports.BytesFieldUpdateOperationsInputSchema = BytesFieldUpdateOperationsInputSchema; exports.BytesFieldUpdateOperationsInputSchema_default = BytesFieldUpdateOperationsInputSchema_default;
//# sourceMappingURL=chunk-MB3XNPS2.cjs.map
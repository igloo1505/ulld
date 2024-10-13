"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/RandomImageUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var RandomImageUncheckedUpdateInputSchema = _zod.z.object({
  path: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUncheckedUpdateInputSchema_default = RandomImageUncheckedUpdateInputSchema;




exports.RandomImageUncheckedUpdateInputSchema = RandomImageUncheckedUpdateInputSchema; exports.RandomImageUncheckedUpdateInputSchema_default = RandomImageUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-EXWECTUP.cjs.map
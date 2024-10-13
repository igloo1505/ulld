"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/RandomImageUncheckedUpdateManyInputSchema.ts
var _zod = require('zod');
var RandomImageUncheckedUpdateManyInputSchema = _zod.z.object({
  path: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var RandomImageUncheckedUpdateManyInputSchema_default = RandomImageUncheckedUpdateManyInputSchema;




exports.RandomImageUncheckedUpdateManyInputSchema = RandomImageUncheckedUpdateManyInputSchema; exports.RandomImageUncheckedUpdateManyInputSchema_default = RandomImageUncheckedUpdateManyInputSchema_default;
//# sourceMappingURL=chunk-LXWCF2PF.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');


var _chunk6JWX7MA3cjs = require('./chunk-6JWX7MA3.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/WaitlistRequestUpdateInputSchema.ts
var _zod = require('zod');
var WaitlistRequestUpdateInputSchema = _zod.z.object({
  email: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  receivedOn: _zod.z.union([_zod.z.coerce.date(), _zod.z.lazy(() => _chunk6JWX7MA3cjs.DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  emailsSent: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var WaitlistRequestUpdateInputSchema_default = WaitlistRequestUpdateInputSchema;




exports.WaitlistRequestUpdateInputSchema = WaitlistRequestUpdateInputSchema; exports.WaitlistRequestUpdateInputSchema_default = WaitlistRequestUpdateInputSchema_default;
//# sourceMappingURL=chunk-AY3TJRMC.cjs.map
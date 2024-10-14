"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGVS2YO64cjs = require('./chunk-GVS2YO64.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');


var _chunkYGCZ3T7Tcjs = require('./chunk-YGCZ3T7T.cjs');

// src/database/inputTypeSchemas/ServingUncheckedUpdateInputSchema.ts
var _zod = require('zod');
var ServingUncheckedUpdateInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkYGCZ3T7Tcjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  quant_oz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkGVS2YO64cjs.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUncheckedUpdateInputSchema_default = ServingUncheckedUpdateInputSchema;




exports.ServingUncheckedUpdateInputSchema = ServingUncheckedUpdateInputSchema; exports.ServingUncheckedUpdateInputSchema_default = ServingUncheckedUpdateInputSchema_default;
//# sourceMappingURL=chunk-Y2AXX5O2.cjs.map
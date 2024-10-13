"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK4RXAWJHcjs = require('./chunk-K4RXAWJH.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');


var _chunkX2HWIL4Acjs = require('./chunk-X2HWIL4A.cjs');

// src/database/inputTypeSchemas/ServingUncheckedUpdateManyWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUncheckedUpdateManyWithoutItemInputSchema = _zod.z.object({
  id: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkX2HWIL4Acjs.IntFieldUpdateOperationsInputSchema)]).optional(),
  quant_oz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkK4RXAWJHcjs.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var ServingUncheckedUpdateManyWithoutItemInputSchema_default = ServingUncheckedUpdateManyWithoutItemInputSchema;




exports.ServingUncheckedUpdateManyWithoutItemInputSchema = ServingUncheckedUpdateManyWithoutItemInputSchema; exports.ServingUncheckedUpdateManyWithoutItemInputSchema_default = ServingUncheckedUpdateManyWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-F7KDDPNV.cjs.map
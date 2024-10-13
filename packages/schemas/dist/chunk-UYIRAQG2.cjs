"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAYHNNWMTcjs = require('./chunk-AYHNNWMT.cjs');


var _chunkK4RXAWJHcjs = require('./chunk-K4RXAWJH.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');

// src/database/inputTypeSchemas/ServingUpdateInputSchema.ts
var _zod = require('zod');
var ServingUpdateInputSchema = _zod.z.object({
  quant_oz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkK4RXAWJHcjs.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable(),
  item: _zod.z.lazy(() => _chunkAYHNNWMTcjs.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema).optional()
}).strict();
var ServingUpdateInputSchema_default = ServingUpdateInputSchema;




exports.ServingUpdateInputSchema = ServingUpdateInputSchema; exports.ServingUpdateInputSchema_default = ServingUpdateInputSchema_default;
//# sourceMappingURL=chunk-UYIRAQG2.cjs.map
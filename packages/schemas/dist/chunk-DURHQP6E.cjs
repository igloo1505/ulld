"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZUBEB7QHcjs = require('./chunk-ZUBEB7QH.cjs');


var _chunkGVS2YO64cjs = require('./chunk-GVS2YO64.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunkE6WNRJ6Fcjs = require('./chunk-E6WNRJ6F.cjs');

// src/database/inputTypeSchemas/ServingUpdateInputSchema.ts
var _zod = require('zod');
var ServingUpdateInputSchema = _zod.z.object({
  quant_oz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkE6WNRJ6Fcjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema), _zod.z.lazy(() => _chunkGVS2YO64cjs.NullableEnumQUANTITY_GUESSFieldUpdateOperationsInputSchema)]).optional().nullable(),
  item: _zod.z.lazy(() => _chunkZUBEB7QHcjs.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema).optional()
}).strict();
var ServingUpdateInputSchema_default = ServingUpdateInputSchema;




exports.ServingUpdateInputSchema = ServingUpdateInputSchema; exports.ServingUpdateInputSchema_default = ServingUpdateInputSchema_default;
//# sourceMappingURL=chunk-DURHQP6E.cjs.map
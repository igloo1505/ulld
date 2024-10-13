"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');

// src/database/inputTypeSchemas/ServingUncheckedCreateWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUncheckedCreateWithoutItemInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingUncheckedCreateWithoutItemInputSchema_default = ServingUncheckedCreateWithoutItemInputSchema;




exports.ServingUncheckedCreateWithoutItemInputSchema = ServingUncheckedCreateWithoutItemInputSchema; exports.ServingUncheckedCreateWithoutItemInputSchema_default = ServingUncheckedCreateWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-ZRG3FK3T.cjs.map
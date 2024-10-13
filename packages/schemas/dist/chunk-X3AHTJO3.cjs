"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');

// src/database/inputTypeSchemas/ServingUncheckedCreateInputSchema.ts
var _zod = require('zod');
var ServingUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  dietaryItemId: _zod.z.number().int(),
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingUncheckedCreateInputSchema_default = ServingUncheckedCreateInputSchema;




exports.ServingUncheckedCreateInputSchema = ServingUncheckedCreateInputSchema; exports.ServingUncheckedCreateInputSchema_default = ServingUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-X3AHTJO3.cjs.map
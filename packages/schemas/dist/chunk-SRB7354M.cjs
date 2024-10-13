"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');

// src/database/inputTypeSchemas/ServingCreateWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateWithoutItemInputSchema = _zod.z.object({
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateWithoutItemInputSchema_default = ServingCreateWithoutItemInputSchema;




exports.ServingCreateWithoutItemInputSchema = ServingCreateWithoutItemInputSchema; exports.ServingCreateWithoutItemInputSchema_default = ServingCreateWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-SRB7354M.cjs.map
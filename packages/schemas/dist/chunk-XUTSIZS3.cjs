"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/ServingCreateWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateWithoutItemInputSchema = _zod.z.object({
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateWithoutItemInputSchema_default = ServingCreateWithoutItemInputSchema;




exports.ServingCreateWithoutItemInputSchema = ServingCreateWithoutItemInputSchema; exports.ServingCreateWithoutItemInputSchema_default = ServingCreateWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-XUTSIZS3.cjs.map
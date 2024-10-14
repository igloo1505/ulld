"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/ServingCreateManyItemInputSchema.ts
var _zod = require('zod');
var ServingCreateManyItemInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateManyItemInputSchema_default = ServingCreateManyItemInputSchema;




exports.ServingCreateManyItemInputSchema = ServingCreateManyItemInputSchema; exports.ServingCreateManyItemInputSchema_default = ServingCreateManyItemInputSchema_default;
//# sourceMappingURL=chunk-RKDQ3WI4.cjs.map
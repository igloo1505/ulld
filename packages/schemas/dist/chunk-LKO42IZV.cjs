"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/ServingCreateManyInputSchema.ts
var _zod = require('zod');
var ServingCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  dietaryItemId: _zod.z.number().int(),
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable()
}).strict();
var ServingCreateManyInputSchema_default = ServingCreateManyInputSchema;




exports.ServingCreateManyInputSchema = ServingCreateManyInputSchema; exports.ServingCreateManyInputSchema_default = ServingCreateManyInputSchema_default;
//# sourceMappingURL=chunk-LKO42IZV.cjs.map
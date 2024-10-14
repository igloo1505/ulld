"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXR7ZLD3Ycjs = require('./chunk-XR7ZLD3Y.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/inputTypeSchemas/ServingCreateInputSchema.ts
var _zod = require('zod');
var ServingCreateInputSchema = _zod.z.object({
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema).optional().nullable(),
  item: _zod.z.lazy(() => _chunkXR7ZLD3Ycjs.DietaryItemCreateNestedOneWithoutServingInputSchema)
}).strict();
var ServingCreateInputSchema_default = ServingCreateInputSchema;




exports.ServingCreateInputSchema = ServingCreateInputSchema; exports.ServingCreateInputSchema_default = ServingCreateInputSchema_default;
//# sourceMappingURL=chunk-LQH4O3QY.cjs.map
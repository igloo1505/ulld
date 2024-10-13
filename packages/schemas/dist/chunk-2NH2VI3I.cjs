"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTVNWFMYLcjs = require('./chunk-TVNWFMYL.cjs');


var _chunk2HKOVXYCcjs = require('./chunk-2HKOVXYC.cjs');

// src/database/inputTypeSchemas/ServingCreateInputSchema.ts
var _zod = require('zod');
var ServingCreateInputSchema = _zod.z.object({
  quant_oz: _zod.z.number().optional().nullable(),
  quant_guess: _zod.z.lazy(() => _chunk2HKOVXYCcjs.QUANTITY_GUESSSchema).optional().nullable(),
  item: _zod.z.lazy(() => _chunkTVNWFMYLcjs.DietaryItemCreateNestedOneWithoutServingInputSchema)
}).strict();
var ServingCreateInputSchema_default = ServingCreateInputSchema;




exports.ServingCreateInputSchema = ServingCreateInputSchema; exports.ServingCreateInputSchema_default = ServingCreateInputSchema_default;
//# sourceMappingURL=chunk-2NH2VI3I.cjs.map
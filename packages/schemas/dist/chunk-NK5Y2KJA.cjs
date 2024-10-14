"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDSJ7UQCKcjs = require('./chunk-DSJ7UQCK.cjs');


var _chunkI5MLBWFMcjs = require('./chunk-I5MLBWFM.cjs');

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateInputSchema.ts
var _zod = require('zod');
var DietaryItemUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  name: _zod.z.string(),
  barcode: _zod.z.string().optional().nullable(),
  gi: _zod.z.number().int().optional().nullable(),
  calsPerOz: _zod.z.number().optional().nullable(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.number().optional(),
  Diet: _zod.z.lazy(() => _chunkDSJ7UQCKcjs.DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkI5MLBWFMcjs.ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateInputSchema_default = DietaryItemUncheckedCreateInputSchema;




exports.DietaryItemUncheckedCreateInputSchema = DietaryItemUncheckedCreateInputSchema; exports.DietaryItemUncheckedCreateInputSchema_default = DietaryItemUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-NK5Y2KJA.cjs.map
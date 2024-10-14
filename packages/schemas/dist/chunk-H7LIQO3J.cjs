"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI5MLBWFMcjs = require('./chunk-I5MLBWFM.cjs');

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemUncheckedCreateWithoutDietInputSchema = _zod.z.object({
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
  Serving: _zod.z.lazy(() => _chunkI5MLBWFMcjs.ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateWithoutDietInputSchema_default = DietaryItemUncheckedCreateWithoutDietInputSchema;




exports.DietaryItemUncheckedCreateWithoutDietInputSchema = DietaryItemUncheckedCreateWithoutDietInputSchema; exports.DietaryItemUncheckedCreateWithoutDietInputSchema_default = DietaryItemUncheckedCreateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-H7LIQO3J.cjs.map
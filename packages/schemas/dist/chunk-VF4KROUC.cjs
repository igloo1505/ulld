"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDSJ7UQCKcjs = require('./chunk-DSJ7UQCK.cjs');

// src/database/inputTypeSchemas/DietaryItemUncheckedCreateWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemUncheckedCreateWithoutServingInputSchema = _zod.z.object({
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
  Diet: _zod.z.lazy(() => _chunkDSJ7UQCKcjs.DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateWithoutServingInputSchema_default = DietaryItemUncheckedCreateWithoutServingInputSchema;




exports.DietaryItemUncheckedCreateWithoutServingInputSchema = DietaryItemUncheckedCreateWithoutServingInputSchema; exports.DietaryItemUncheckedCreateWithoutServingInputSchema_default = DietaryItemUncheckedCreateWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-VF4KROUC.cjs.map
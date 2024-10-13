"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSSQ65K3Ycjs = require('./chunk-SSQ65K3Y.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateWithoutServingInputSchema = _zod.z.object({
  name: _zod.z.string(),
  barcode: _zod.z.string().optional().nullable(),
  gi: _zod.z.number().int().optional().nullable(),
  calsPerOz: _zod.z.number().optional().nullable(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.number().optional(),
  Diet: _zod.z.lazy(() => _chunkSSQ65K3Ycjs.DietCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();
var DietaryItemCreateWithoutServingInputSchema_default = DietaryItemCreateWithoutServingInputSchema;




exports.DietaryItemCreateWithoutServingInputSchema = DietaryItemCreateWithoutServingInputSchema; exports.DietaryItemCreateWithoutServingInputSchema_default = DietaryItemCreateWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-7C4CPACY.cjs.map
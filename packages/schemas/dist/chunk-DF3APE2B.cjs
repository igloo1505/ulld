"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkH2SJCHTZcjs = require('./chunk-H2SJCHTZ.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateWithoutDietInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateWithoutDietInputSchema = _zod.z.object({
  name: _zod.z.string(),
  barcode: _zod.z.string().optional().nullable(),
  gi: _zod.z.number().int().optional().nullable(),
  calsPerOz: _zod.z.number().optional().nullable(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.number().optional(),
  Serving: _zod.z.lazy(() => _chunkH2SJCHTZcjs.ServingCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemCreateWithoutDietInputSchema_default = DietaryItemCreateWithoutDietInputSchema;




exports.DietaryItemCreateWithoutDietInputSchema = DietaryItemCreateWithoutDietInputSchema; exports.DietaryItemCreateWithoutDietInputSchema_default = DietaryItemCreateWithoutDietInputSchema_default;
//# sourceMappingURL=chunk-DF3APE2B.cjs.map
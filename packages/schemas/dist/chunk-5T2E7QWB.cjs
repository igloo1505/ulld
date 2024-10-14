"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DietaryItemCreateManyInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  name: _zod.z.string(),
  barcode: _zod.z.string().optional().nullable(),
  gi: _zod.z.number().int().optional().nullable(),
  calsPerOz: _zod.z.number().optional().nullable(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.number().optional()
}).strict();
var DietaryItemCreateManyInputSchema_default = DietaryItemCreateManyInputSchema;




exports.DietaryItemCreateManyInputSchema = DietaryItemCreateManyInputSchema; exports.DietaryItemCreateManyInputSchema_default = DietaryItemCreateManyInputSchema_default;
//# sourceMappingURL=chunk-5T2E7QWB.cjs.map
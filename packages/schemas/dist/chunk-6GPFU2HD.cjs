"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFZ5UHECUcjs = require('./chunk-FZ5UHECU.cjs');


var _chunkBF2TBJWKcjs = require('./chunk-BF2TBJWK.cjs');

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
  Diet: _zod.z.lazy(() => _chunkFZ5UHECUcjs.DietUncheckedCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkBF2TBJWKcjs.ServingUncheckedCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemUncheckedCreateInputSchema_default = DietaryItemUncheckedCreateInputSchema;




exports.DietaryItemUncheckedCreateInputSchema = DietaryItemUncheckedCreateInputSchema; exports.DietaryItemUncheckedCreateInputSchema_default = DietaryItemUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-6GPFU2HD.cjs.map
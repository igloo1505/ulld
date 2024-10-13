"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSSQ65K3Ycjs = require('./chunk-SSQ65K3Y.cjs');


var _chunkAAOWLXBIcjs = require('./chunk-AAOWLXBI.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateInputSchema = _zod.z.object({
  name: _zod.z.string(),
  barcode: _zod.z.string().optional().nullable(),
  gi: _zod.z.number().int().optional().nullable(),
  calsPerOz: _zod.z.number().optional().nullable(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.number().optional(),
  Diet: _zod.z.lazy(() => _chunkSSQ65K3Ycjs.DietCreateNestedManyWithoutItemsInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkAAOWLXBIcjs.ServingCreateNestedManyWithoutItemInputSchema).optional()
}).strict();
var DietaryItemCreateInputSchema_default = DietaryItemCreateInputSchema;




exports.DietaryItemCreateInputSchema = DietaryItemCreateInputSchema; exports.DietaryItemCreateInputSchema_default = DietaryItemCreateInputSchema_default;
//# sourceMappingURL=chunk-HNOBWTVG.cjs.map
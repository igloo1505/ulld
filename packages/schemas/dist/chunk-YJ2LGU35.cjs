"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/inputTypeSchemas/ServingSelectSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingSelectSchema_default = ServingSelectSchema;




exports.ServingSelectSchema = ServingSelectSchema; exports.ServingSelectSchema_default = ServingSelectSchema_default;
//# sourceMappingURL=chunk-YJ2LGU35.cjs.map
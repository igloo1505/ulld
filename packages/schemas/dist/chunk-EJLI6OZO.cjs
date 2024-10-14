"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/outputTypeSchemas/ServingFindUniqueArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindUniqueArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.ServingIncludeSchema.optional(),
  where: _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema
}).strict();
var ServingFindUniqueArgsSchema_default = ServingFindUniqueArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingFindUniqueArgsSchema = ServingFindUniqueArgsSchema; exports.ServingFindUniqueArgsSchema_default = ServingFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-EJLI6OZO.cjs.map
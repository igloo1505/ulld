"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkXKUAIKZKcjs = require('./chunk-XKUAIKZK.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');


var _chunkACGIK4FVcjs = require('./chunk-ACGIK4FV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/ServingFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindFirstOrThrowArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.ServingIncludeSchema.optional(),
  where: _chunkZGGHUMG7cjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXKUAIKZKcjs.ServingOrderByWithRelationInputSchema.array(), _chunkXKUAIKZKcjs.ServingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkACGIK4FVcjs.ServingScalarFieldEnumSchema, _chunkACGIK4FVcjs.ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindFirstOrThrowArgsSchema_default = ServingFindFirstOrThrowArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingFindFirstOrThrowArgsSchema = ServingFindFirstOrThrowArgsSchema; exports.ServingFindFirstOrThrowArgsSchema_default = ServingFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-4DNINM2U.cjs.map
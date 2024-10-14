"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');


var _chunkSH7GPM33cjs = require('./chunk-SH7GPM33.cjs');


var _chunkWWY7CLMScjs = require('./chunk-WWY7CLMS.cjs');


var _chunkEOB53DGHcjs = require('./chunk-EOB53DGH.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/DietaryItemFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var DietaryItemSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  name: _zod.z.boolean().optional(),
  barcode: _zod.z.boolean().optional(),
  gi: _zod.z.boolean().optional(),
  calsPerOz: _zod.z.boolean().optional(),
  glutenFree: _zod.z.boolean().optional(),
  minimalFructose: _zod.z.boolean().optional(),
  natural: _zod.z.boolean().optional(),
  organic: _zod.z.boolean().optional(),
  impactScore: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkSH7GPM33cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemFindFirstOrThrowArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.DietaryItemIncludeSchema.optional(),
  where: _chunkZGGHUMG7cjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkEOB53DGHcjs.DietaryItemOrderByWithRelationInputSchema.array(), _chunkEOB53DGHcjs.DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkWWY7CLMScjs.DietaryItemScalarFieldEnumSchema, _chunkWWY7CLMScjs.DietaryItemScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietaryItemFindFirstOrThrowArgsSchema_default = DietaryItemFindFirstOrThrowArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemFindFirstOrThrowArgsSchema = DietaryItemFindFirstOrThrowArgsSchema; exports.DietaryItemFindFirstOrThrowArgsSchema_default = DietaryItemFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-UR36CDOK.cjs.map
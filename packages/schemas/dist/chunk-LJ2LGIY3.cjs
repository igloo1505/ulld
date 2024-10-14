"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');


var _chunkSH7GPM33cjs = require('./chunk-SH7GPM33.cjs');

// src/database/outputTypeSchemas/DietaryItemFindUniqueOrThrowArgsSchema.ts
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
var DietaryItemFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.DietaryItemIncludeSchema.optional(),
  where: _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemFindUniqueOrThrowArgsSchema_default = DietaryItemFindUniqueOrThrowArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemFindUniqueOrThrowArgsSchema = DietaryItemFindUniqueOrThrowArgsSchema; exports.DietaryItemFindUniqueOrThrowArgsSchema_default = DietaryItemFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-LJ2LGIY3.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIINAET7Ncjs = require('./chunk-IINAET7N.cjs');


var _chunkIWGD5HQLcjs = require('./chunk-IWGD5HQL.cjs');




var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');


var _chunkSH7GPM33cjs = require('./chunk-SH7GPM33.cjs');

// src/database/outputTypeSchemas/DietaryItemUpdateArgsSchema.ts
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
var DietaryItemUpdateArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.DietaryItemIncludeSchema.optional(),
  data: _zod.z.union([_chunkIWGD5HQLcjs.DietaryItemUpdateInputSchema, _chunkIINAET7Ncjs.DietaryItemUncheckedUpdateInputSchema]),
  where: _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemUpdateArgsSchema_default = DietaryItemUpdateArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemUpdateArgsSchema = DietaryItemUpdateArgsSchema; exports.DietaryItemUpdateArgsSchema_default = DietaryItemUpdateArgsSchema_default;
//# sourceMappingURL=chunk-7QDPGXDF.cjs.map
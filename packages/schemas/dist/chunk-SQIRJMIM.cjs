"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');


var _chunk3LSJ2GR3cjs = require('./chunk-3LSJ2GR3.cjs');


var _chunk3OJB4J3Xcjs = require('./chunk-3OJB4J3X.cjs');


var _chunkL4HT4IEBcjs = require('./chunk-L4HT4IEB.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

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
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk3LSJ2GR3cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemFindFirstOrThrowArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietaryItemIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema.array(), _chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk3OJB4J3Xcjs.DietaryItemScalarFieldEnumSchema, _chunk3OJB4J3Xcjs.DietaryItemScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietaryItemFindFirstOrThrowArgsSchema_default = DietaryItemFindFirstOrThrowArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemFindFirstOrThrowArgsSchema = DietaryItemFindFirstOrThrowArgsSchema; exports.DietaryItemFindFirstOrThrowArgsSchema_default = DietaryItemFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-SQIRJMIM.cjs.map
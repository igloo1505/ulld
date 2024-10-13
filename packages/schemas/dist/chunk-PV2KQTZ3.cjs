"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');


var _chunk3LSJ2GR3cjs = require('./chunk-3LSJ2GR3.cjs');

// src/database/outputTypeSchemas/DietaryItemFindUniqueArgsSchema.ts
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
var DietaryItemFindUniqueArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietaryItemIncludeSchema.optional(),
  where: _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema
}).strict();
var DietaryItemFindUniqueArgsSchema_default = DietaryItemFindUniqueArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemFindUniqueArgsSchema = DietaryItemFindUniqueArgsSchema; exports.DietaryItemFindUniqueArgsSchema_default = DietaryItemFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-PV2KQTZ3.cjs.map
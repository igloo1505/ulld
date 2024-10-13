"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHNOBWTVGcjs = require('./chunk-HNOBWTVG.cjs');


var _chunk6GPFU2HDcjs = require('./chunk-6GPFU2HD.cjs');


var _chunkDIV4KS6Zcjs = require('./chunk-DIV4KS6Z.cjs');


var _chunkXNB27JVCcjs = require('./chunk-XNB27JVC.cjs');




var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');


var _chunk3LSJ2GR3cjs = require('./chunk-3LSJ2GR3.cjs');

// src/database/outputTypeSchemas/DietaryItemUpsertArgsSchema.ts
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
var DietaryItemUpsertArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietaryItemIncludeSchema.optional(),
  where: _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema,
  create: _zod.z.union([_chunkHNOBWTVGcjs.DietaryItemCreateInputSchema, _chunk6GPFU2HDcjs.DietaryItemUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkXNB27JVCcjs.DietaryItemUpdateInputSchema, _chunkDIV4KS6Zcjs.DietaryItemUncheckedUpdateInputSchema])
}).strict();
var DietaryItemUpsertArgsSchema_default = DietaryItemUpsertArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemUpsertArgsSchema = DietaryItemUpsertArgsSchema; exports.DietaryItemUpsertArgsSchema_default = DietaryItemUpsertArgsSchema_default;
//# sourceMappingURL=chunk-6VTK24OM.cjs.map
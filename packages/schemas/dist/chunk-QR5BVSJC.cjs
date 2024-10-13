"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHNOBWTVGcjs = require('./chunk-HNOBWTVG.cjs');


var _chunk6GPFU2HDcjs = require('./chunk-6GPFU2HD.cjs');




var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunk3LSJ2GR3cjs = require('./chunk-3LSJ2GR3.cjs');

// src/database/outputTypeSchemas/DietaryItemCreateArgsSchema.ts
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
var DietaryItemCreateArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietaryItemIncludeSchema.optional(),
  data: _zod.z.union([_chunkHNOBWTVGcjs.DietaryItemCreateInputSchema, _chunk6GPFU2HDcjs.DietaryItemUncheckedCreateInputSchema])
}).strict();
var DietaryItemCreateArgsSchema_default = DietaryItemCreateArgsSchema;





exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemCreateArgsSchema = DietaryItemCreateArgsSchema; exports.DietaryItemCreateArgsSchema_default = DietaryItemCreateArgsSchema_default;
//# sourceMappingURL=chunk-QR5BVSJC.cjs.map
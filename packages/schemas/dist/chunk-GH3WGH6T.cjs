"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunk4QBX23Q4cjs = require('./chunk-4QBX23Q4.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');


var _chunkXRNGTKMLcjs = require('./chunk-XRNGTKML.cjs');


var _chunk5MHLGRUAcjs = require('./chunk-5MHLGRUA.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/DietFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var DietSelectSchema = _zod.z.object({
  name: _zod.z.boolean().optional(),
  summary: _zod.z.boolean().optional(),
  activelyFollowing: _zod.z.boolean().optional(),
  gf: _zod.z.boolean().optional(),
  vegan: _zod.z.boolean().optional(),
  pescatarian: _zod.z.boolean().optional(),
  vegetarian: _zod.z.boolean().optional(),
  fasting: _zod.z.boolean().optional(),
  cardioTraining: _zod.z.boolean().optional(),
  weightTraining: _zod.z.boolean().optional(),
  carb: _zod.z.boolean().optional(),
  pro: _zod.z.boolean().optional(),
  fat: _zod.z.boolean().optional(),
  goals: _zod.z.boolean().optional(),
  created: _zod.z.boolean().optional(),
  lastUpdate: _zod.z.boolean().optional(),
  items: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.HealthReportFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QBX23Q4cjs.DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietFindFirstOrThrowArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema.array(), _chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkXRNGTKMLcjs.DietScalarFieldEnumSchema, _chunkXRNGTKMLcjs.DietScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietFindFirstOrThrowArgsSchema_default = DietFindFirstOrThrowArgsSchema;





exports.DietSelectSchema = DietSelectSchema; exports.DietFindFirstOrThrowArgsSchema = DietFindFirstOrThrowArgsSchema; exports.DietFindFirstOrThrowArgsSchema_default = DietFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-GH3WGH6T.cjs.map
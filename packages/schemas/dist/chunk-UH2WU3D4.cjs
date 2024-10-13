"use strict";Object.defineProperty(exports, "__esModule", {value: true});




var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunk4QBX23Q4cjs = require('./chunk-4QBX23Q4.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/outputTypeSchemas/DietFindUniqueOrThrowArgsSchema.ts
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
var DietFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietIncludeSchema.optional(),
  where: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema
}).strict();
var DietFindUniqueOrThrowArgsSchema_default = DietFindUniqueOrThrowArgsSchema;





exports.DietSelectSchema = DietSelectSchema; exports.DietFindUniqueOrThrowArgsSchema = DietFindUniqueOrThrowArgsSchema; exports.DietFindUniqueOrThrowArgsSchema_default = DietFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-UH2WU3D4.cjs.map
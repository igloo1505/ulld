"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL5P6VXMRcjs = require('./chunk-L5P6VXMR.cjs');


var _chunkH247QKWWcjs = require('./chunk-H247QKWW.cjs');





var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunk4QBX23Q4cjs = require('./chunk-4QBX23Q4.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/outputTypeSchemas/DietUpdateArgsSchema.ts
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
var DietUpdateArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietIncludeSchema.optional(),
  data: _zod.z.union([_chunkH247QKWWcjs.DietUpdateInputSchema, _chunkL5P6VXMRcjs.DietUncheckedUpdateInputSchema]),
  where: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema
}).strict();
var DietUpdateArgsSchema_default = DietUpdateArgsSchema;





exports.DietSelectSchema = DietSelectSchema; exports.DietUpdateArgsSchema = DietUpdateArgsSchema; exports.DietUpdateArgsSchema_default = DietUpdateArgsSchema_default;
//# sourceMappingURL=chunk-G7O5EX5V.cjs.map
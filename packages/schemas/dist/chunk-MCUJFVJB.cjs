"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQCIC7UPZcjs = require('./chunk-QCIC7UPZ.cjs');


var _chunkC4NY6BIDcjs = require('./chunk-C4NY6BID.cjs');


var _chunkL5P6VXMRcjs = require('./chunk-L5P6VXMR.cjs');


var _chunkH247QKWWcjs = require('./chunk-H247QKWW.cjs');





var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunk4QBX23Q4cjs = require('./chunk-4QBX23Q4.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/outputTypeSchemas/DietUpsertArgsSchema.ts
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
var DietUpsertArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.DietIncludeSchema.optional(),
  where: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema,
  create: _zod.z.union([_chunkQCIC7UPZcjs.DietCreateInputSchema, _chunkC4NY6BIDcjs.DietUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkH247QKWWcjs.DietUpdateInputSchema, _chunkL5P6VXMRcjs.DietUncheckedUpdateInputSchema])
}).strict();
var DietUpsertArgsSchema_default = DietUpsertArgsSchema;





exports.DietSelectSchema = DietSelectSchema; exports.DietUpsertArgsSchema = DietUpsertArgsSchema; exports.DietUpsertArgsSchema_default = DietUpsertArgsSchema_default;
//# sourceMappingURL=chunk-MCUJFVJB.cjs.map
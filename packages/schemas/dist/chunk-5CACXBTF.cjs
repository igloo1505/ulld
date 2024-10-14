"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJBUE42PFcjs = require('./chunk-JBUE42PF.cjs');


var _chunkAR66DWOOcjs = require('./chunk-AR66DWOO.cjs');


var _chunkCN6VTJ2Bcjs = require('./chunk-CN6VTJ2B.cjs');


var _chunkM4UJQWL6cjs = require('./chunk-M4UJQWL6.cjs');





var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunk6YEQ7ICZcjs = require('./chunk-6YEQ7ICZ.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

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
  items: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.HealthReportFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk6YEQ7ICZcjs.DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietUpsertArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.DietIncludeSchema.optional(),
  where: _chunkELJLHOYBcjs.DietWhereUniqueInputSchema,
  create: _zod.z.union([_chunkJBUE42PFcjs.DietCreateInputSchema, _chunkAR66DWOOcjs.DietUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkM4UJQWL6cjs.DietUpdateInputSchema, _chunkCN6VTJ2Bcjs.DietUncheckedUpdateInputSchema])
}).strict();
var DietUpsertArgsSchema_default = DietUpsertArgsSchema;





exports.DietSelectSchema = DietSelectSchema; exports.DietUpsertArgsSchema = DietUpsertArgsSchema; exports.DietUpsertArgsSchema_default = DietUpsertArgsSchema_default;
//# sourceMappingURL=chunk-5CACXBTF.cjs.map
"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4QBX23Q4cjs = require('./chunk-4QBX23Q4.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');


var _chunkXRNGTKMLcjs = require('./chunk-XRNGTKML.cjs');


var _chunk3LSJ2GR3cjs = require('./chunk-3LSJ2GR3.cjs');


var _chunk3OJB4J3Xcjs = require('./chunk-3OJB4J3X.cjs');


var _chunkZLE6H6QCcjs = require('./chunk-ZLE6H6QC.cjs');


var _chunk3ZQVKIXXcjs = require('./chunk-3ZQVKIXX.cjs');


var _chunkQFJ32QPIcjs = require('./chunk-QFJ32QPI.cjs');


var _chunkXGSAA7XHcjs = require('./chunk-XGSAA7XH.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');


var _chunkL4HT4IEBcjs = require('./chunk-L4HT4IEB.cjs');


var _chunkFZVFNRNScjs = require('./chunk-FZVFNRNS.cjs');


var _chunkUVMQA5FCcjs = require('./chunk-UVMQA5FC.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');


var _chunk5MHLGRUAcjs = require('./chunk-5MHLGRUA.cjs');


var _chunkOBEFW72Ecjs = require('./chunk-OBEFW72E.cjs');






var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/inputTypeSchemas/TimePeriodIncludeSchema.ts
var _zod = require('zod');

// src/database/outputTypeSchemas/DietArgsSchema.ts


// src/database/inputTypeSchemas/DietSelectSchema.ts


// src/database/outputTypeSchemas/DietaryItemFindManyArgsSchema.ts


// src/database/inputTypeSchemas/DietaryItemIncludeSchema.ts


// src/database/outputTypeSchemas/DietFindManyArgsSchema.ts


// src/database/inputTypeSchemas/DietIncludeSchema.ts


// src/database/outputTypeSchemas/TimePeriodFindManyArgsSchema.ts

var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindManyArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: TimePeriodIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema.array(), _chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOBEFW72Ecjs.TimePeriodScalarFieldEnumSchema, _chunkOBEFW72Ecjs.TimePeriodScalarFieldEnumSchema.array()]).optional()
}).strict();
var TimePeriodFindManyArgsSchema_default = TimePeriodFindManyArgsSchema;

// src/database/outputTypeSchemas/HealthReportFindManyArgsSchema.ts


// src/database/inputTypeSchemas/HealthReportIncludeSchema.ts

var HealthReportIncludeSchema = _zod.z.object({
  currentDiet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportIncludeSchema_default = HealthReportIncludeSchema;

// src/database/outputTypeSchemas/HealthReportFindManyArgsSchema.ts
var HealthReportSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  summary: _zod.z.boolean().optional(),
  overall: _zod.z.boolean().optional(),
  skin: _zod.z.boolean().optional(),
  bloat: _zod.z.boolean().optional(),
  weight_feeling: _zod.z.boolean().optional(),
  fullness: _zod.z.boolean().optional(),
  weight: _zod.z.boolean().optional(),
  cardiacCapacity: _zod.z.boolean().optional(),
  jawLine: _zod.z.boolean().optional(),
  joints: _zod.z.boolean().optional(),
  flexibility: _zod.z.boolean().optional(),
  anxiety: _zod.z.boolean().optional(),
  anxiety_desc: _zod.z.boolean().optional(),
  mood_desc: _zod.z.boolean().optional(),
  mood: _zod.z.boolean().optional(),
  sexDrive: _zod.z.boolean().optional(),
  intruisiveThoughts: _zod.z.boolean().optional(),
  caffeineIntake: _zod.z.boolean().optional(),
  glutenIntake: _zod.z.boolean().optional(),
  sugarIntake: _zod.z.boolean().optional(),
  artificialSweetenerIntake: _zod.z.boolean().optional(),
  artificalDyes: _zod.z.boolean().optional(),
  sleepQuality: _zod.z.boolean().optional(),
  hydration: _zod.z.boolean().optional(),
  twitching: _zod.z.boolean().optional(),
  sleepHours: _zod.z.boolean().optional(),
  calorie_est: _zod.z.boolean().optional(),
  times_meals_more_than_gap_apart: _zod.z.boolean().optional(),
  estHoursInExcessFast: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  created: _zod.z.boolean().optional(),
  currentDiet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var HealthReportFindManyArgsSchema = _zod.z.object({
  select: HealthReportSelectSchema.optional(),
  include: HealthReportIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.HealthReportWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZLE6H6QCcjs.HealthReportOrderByWithRelationInputSchema.array(), _chunkZLE6H6QCcjs.HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk3ZQVKIXXcjs.HealthReportWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkQFJ32QPIcjs.HealthReportScalarFieldEnumSchema, _chunkQFJ32QPIcjs.HealthReportScalarFieldEnumSchema.array()]).optional()
}).strict();
var HealthReportFindManyArgsSchema_default = HealthReportFindManyArgsSchema;

// src/database/inputTypeSchemas/DietIncludeSchema.ts
var DietIncludeSchema = _zod.z.object({
  items: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QBX23Q4cjs.DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietIncludeSchema_default = DietIncludeSchema;

// src/database/outputTypeSchemas/DietFindManyArgsSchema.ts
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
  items: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QBX23Q4cjs.DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietFindManyArgsSchema = _zod.z.object({
  select: DietSelectSchema.optional(),
  include: DietIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.DietWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema.array(), _chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkXRNGTKMLcjs.DietScalarFieldEnumSchema, _chunkXRNGTKMLcjs.DietScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietFindManyArgsSchema_default = DietFindManyArgsSchema;

// src/database/outputTypeSchemas/ServingFindManyArgsSchema.ts


// src/database/inputTypeSchemas/ServingIncludeSchema.ts


// src/database/outputTypeSchemas/DietaryItemArgsSchema.ts


// src/database/inputTypeSchemas/DietaryItemSelectSchema.ts

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
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk3LSJ2GR3cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemSelectSchema_default = DietaryItemSelectSchema;

// src/database/outputTypeSchemas/DietaryItemArgsSchema.ts
var DietaryItemArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => DietaryItemSelectSchema).optional(),
  include: _zod.z.lazy(() => DietaryItemIncludeSchema).optional()
}).strict();
var DietaryItemArgsSchema_default = DietaryItemArgsSchema;

// src/database/inputTypeSchemas/ServingIncludeSchema.ts
var ServingIncludeSchema = _zod.z.object({
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingIncludeSchema_default = ServingIncludeSchema;

// src/database/outputTypeSchemas/ServingFindManyArgsSchema.ts
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindManyArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: ServingIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema.array(), _chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkFZVFNRNScjs.ServingScalarFieldEnumSchema, _chunkFZVFNRNScjs.ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindManyArgsSchema_default = ServingFindManyArgsSchema;

// src/database/inputTypeSchemas/DietaryItemIncludeSchema.ts
var DietaryItemIncludeSchema = _zod.z.object({
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk3LSJ2GR3cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemIncludeSchema_default = DietaryItemIncludeSchema;

// src/database/outputTypeSchemas/DietaryItemFindManyArgsSchema.ts
var DietaryItemSelectSchema2 = _zod.z.object({
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
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietFindManyArgsSchema)]).optional(),
  Serving: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => ServingFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk3LSJ2GR3cjs.DietaryItemCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietaryItemFindManyArgsSchema = _zod.z.object({
  select: DietaryItemSelectSchema2.optional(),
  include: DietaryItemIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.DietaryItemWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema.array(), _chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk3OJB4J3Xcjs.DietaryItemScalarFieldEnumSchema, _chunk3OJB4J3Xcjs.DietaryItemScalarFieldEnumSchema.array()]).optional()
}).strict();
var DietaryItemFindManyArgsSchema_default = DietaryItemFindManyArgsSchema;

// src/database/inputTypeSchemas/DietSelectSchema.ts
var DietSelectSchema2 = _zod.z.object({
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
  items: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietaryItemFindManyArgsSchema)]).optional(),
  periodsFollowed: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => TimePeriodFindManyArgsSchema)]).optional(),
  HealthReport: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => HealthReportFindManyArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk4QBX23Q4cjs.DietCountOutputTypeArgsSchema)]).optional()
}).strict();
var DietSelectSchema_default = DietSelectSchema2;

// src/database/outputTypeSchemas/DietArgsSchema.ts
var DietArgsSchema = _zod.z.object({
  select: _zod.z.lazy(() => DietSelectSchema2).optional(),
  include: _zod.z.lazy(() => DietIncludeSchema).optional()
}).strict();
var DietArgsSchema_default = DietArgsSchema;

// src/database/inputTypeSchemas/TimePeriodIncludeSchema.ts
var TimePeriodIncludeSchema = _zod.z.object({
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => DietArgsSchema)]).optional()
}).strict();
var TimePeriodIncludeSchema_default = TimePeriodIncludeSchema;



































exports.TimePeriodIncludeSchema = TimePeriodIncludeSchema; exports.TimePeriodIncludeSchema_default = TimePeriodIncludeSchema_default; exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodFindManyArgsSchema = TimePeriodFindManyArgsSchema; exports.TimePeriodFindManyArgsSchema_default = TimePeriodFindManyArgsSchema_default; exports.HealthReportIncludeSchema = HealthReportIncludeSchema; exports.HealthReportIncludeSchema_default = HealthReportIncludeSchema_default; exports.HealthReportSelectSchema = HealthReportSelectSchema; exports.HealthReportFindManyArgsSchema = HealthReportFindManyArgsSchema; exports.HealthReportFindManyArgsSchema_default = HealthReportFindManyArgsSchema_default; exports.DietIncludeSchema = DietIncludeSchema; exports.DietIncludeSchema_default = DietIncludeSchema_default; exports.DietSelectSchema = DietSelectSchema; exports.DietFindManyArgsSchema = DietFindManyArgsSchema; exports.DietFindManyArgsSchema_default = DietFindManyArgsSchema_default; exports.DietaryItemSelectSchema = DietaryItemSelectSchema; exports.DietaryItemSelectSchema_default = DietaryItemSelectSchema_default; exports.DietaryItemArgsSchema = DietaryItemArgsSchema; exports.DietaryItemArgsSchema_default = DietaryItemArgsSchema_default; exports.ServingIncludeSchema = ServingIncludeSchema; exports.ServingIncludeSchema_default = ServingIncludeSchema_default; exports.ServingSelectSchema = ServingSelectSchema; exports.ServingFindManyArgsSchema = ServingFindManyArgsSchema; exports.ServingFindManyArgsSchema_default = ServingFindManyArgsSchema_default; exports.DietaryItemIncludeSchema = DietaryItemIncludeSchema; exports.DietaryItemIncludeSchema_default = DietaryItemIncludeSchema_default; exports.DietaryItemSelectSchema2 = DietaryItemSelectSchema2; exports.DietaryItemFindManyArgsSchema = DietaryItemFindManyArgsSchema; exports.DietaryItemFindManyArgsSchema_default = DietaryItemFindManyArgsSchema_default; exports.DietSelectSchema2 = DietSelectSchema2; exports.DietSelectSchema_default = DietSelectSchema_default; exports.DietArgsSchema = DietArgsSchema; exports.DietArgsSchema_default = DietArgsSchema_default;
//# sourceMappingURL=chunk-N2ITDNOT.cjs.map
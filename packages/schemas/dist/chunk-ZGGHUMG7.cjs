"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIX7LNI3Gcjs = require('./chunk-IX7LNI3G.cjs');


var _chunkFTLKOFHAcjs = require('./chunk-FTLKOFHA.cjs');


var _chunkGSBBLEWRcjs = require('./chunk-GSBBLEWR.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunk54BATBBKcjs = require('./chunk-54BATBBK.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/DietListRelationFilterSchema.ts
var _zod = require('zod');

// src/database/inputTypeSchemas/DietWhereInputSchema.ts


// src/database/inputTypeSchemas/DietaryItemListRelationFilterSchema.ts


// src/database/inputTypeSchemas/DietaryItemWhereInputSchema.ts


// src/database/inputTypeSchemas/ServingListRelationFilterSchema.ts


// src/database/inputTypeSchemas/ServingWhereInputSchema.ts


// src/database/inputTypeSchemas/DietaryItemRelationFilterSchema.ts

var DietaryItemRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => DietaryItemWhereInputSchema).optional(),
  isNot: _zod.z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemRelationFilterSchema_default = DietaryItemRelationFilterSchema;

// src/database/inputTypeSchemas/ServingWhereInputSchema.ts
var ServingWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ServingWhereInputSchema), _zod.z.lazy(() => ServingWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ServingWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ServingWhereInputSchema), _zod.z.lazy(() => ServingWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  dietaryItemId: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkGSBBLEWRcjs.EnumQUANTITY_GUESSNullableFilterSchema), _zod.z.lazy(() => _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema)]).optional().nullable(),
  item: _zod.z.union([_zod.z.lazy(() => DietaryItemRelationFilterSchema), _zod.z.lazy(() => DietaryItemWhereInputSchema)]).optional()
}).strict();
var ServingWhereInputSchema_default = ServingWhereInputSchema;

// src/database/inputTypeSchemas/ServingListRelationFilterSchema.ts
var ServingListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => ServingWhereInputSchema).optional(),
  some: _zod.z.lazy(() => ServingWhereInputSchema).optional(),
  none: _zod.z.lazy(() => ServingWhereInputSchema).optional()
}).strict();
var ServingListRelationFilterSchema_default = ServingListRelationFilterSchema;

// src/database/inputTypeSchemas/DietaryItemWhereInputSchema.ts
var DietaryItemWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietaryItemWhereInputSchema), _zod.z.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietaryItemWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietaryItemWhereInputSchema), _zod.z.lazy(() => DietaryItemWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  minimalFructose: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  natural: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  organic: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  impactScore: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  Diet: _zod.z.lazy(() => DietListRelationFilterSchema).optional(),
  Serving: _zod.z.lazy(() => ServingListRelationFilterSchema).optional()
}).strict();
var DietaryItemWhereInputSchema_default = DietaryItemWhereInputSchema;

// src/database/inputTypeSchemas/DietaryItemListRelationFilterSchema.ts
var DietaryItemListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => DietaryItemWhereInputSchema).optional(),
  some: _zod.z.lazy(() => DietaryItemWhereInputSchema).optional(),
  none: _zod.z.lazy(() => DietaryItemWhereInputSchema).optional()
}).strict();
var DietaryItemListRelationFilterSchema_default = DietaryItemListRelationFilterSchema;

// src/database/inputTypeSchemas/TimePeriodListRelationFilterSchema.ts


// src/database/inputTypeSchemas/TimePeriodWhereInputSchema.ts


// src/database/inputTypeSchemas/DietNullableRelationFilterSchema.ts

var DietNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => DietWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => DietWhereInputSchema).optional().nullable()
}).strict();
var DietNullableRelationFilterSchema_default = DietNullableRelationFilterSchema;

// src/database/inputTypeSchemas/TimePeriodWhereInputSchema.ts
var TimePeriodWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TimePeriodWhereInputSchema), _zod.z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TimePeriodWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TimePeriodWhereInputSchema), _zod.z.lazy(() => TimePeriodWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  start: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  Diet: _zod.z.union([_zod.z.lazy(() => DietNullableRelationFilterSchema), _zod.z.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict();
var TimePeriodWhereInputSchema_default = TimePeriodWhereInputSchema;

// src/database/inputTypeSchemas/TimePeriodListRelationFilterSchema.ts
var TimePeriodListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => TimePeriodWhereInputSchema).optional(),
  some: _zod.z.lazy(() => TimePeriodWhereInputSchema).optional(),
  none: _zod.z.lazy(() => TimePeriodWhereInputSchema).optional()
}).strict();
var TimePeriodListRelationFilterSchema_default = TimePeriodListRelationFilterSchema;

// src/database/inputTypeSchemas/HealthReportListRelationFilterSchema.ts


// src/database/inputTypeSchemas/HealthReportWhereInputSchema.ts

var HealthReportWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => HealthReportWhereInputSchema), _zod.z.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => HealthReportWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => HealthReportWhereInputSchema), _zod.z.lazy(() => HealthReportWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  overall: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  skin: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  bloat: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight_feeling: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  fullness: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  weight: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  cardiacCapacity: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  jawLine: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  joints: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  flexibility: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  anxiety_desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood_desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mood: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sexDrive: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  intruisiveThoughts: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  caffeineIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  glutenIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sugarIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificialSweetenerIntake: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  artificalDyes: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepQuality: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  hydration: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  twitching: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  sleepHours: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  calorie_est: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  times_meals_more_than_gap_apart: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  estHoursInExcessFast: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  currentDiet: _zod.z.union([_zod.z.lazy(() => DietNullableRelationFilterSchema), _zod.z.lazy(() => DietWhereInputSchema)]).optional().nullable()
}).strict();
var HealthReportWhereInputSchema_default = HealthReportWhereInputSchema;

// src/database/inputTypeSchemas/HealthReportListRelationFilterSchema.ts
var HealthReportListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => HealthReportWhereInputSchema).optional(),
  some: _zod.z.lazy(() => HealthReportWhereInputSchema).optional(),
  none: _zod.z.lazy(() => HealthReportWhereInputSchema).optional()
}).strict();
var HealthReportListRelationFilterSchema_default = HealthReportListRelationFilterSchema;

// src/database/inputTypeSchemas/DietWhereInputSchema.ts
var DietWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DietWhereInputSchema), _zod.z.lazy(() => DietWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DietWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DietWhereInputSchema), _zod.z.lazy(() => DietWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  activelyFollowing: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  gf: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  vegan: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  pescatarian: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  vegetarian: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  fasting: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  cardioTraining: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  weightTraining: _zod.z.union([_zod.z.lazy(() => _chunkFTLKOFHAcjs.EnumTERTIARY_TOGGLEFilterSchema), _zod.z.lazy(() => _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema)]).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  goals: _zod.z.lazy(() => _chunkIX7LNI3Gcjs.EnumDIETARY_GOALNullableListFilterSchema).optional(),
  created: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  items: _zod.z.lazy(() => DietaryItemListRelationFilterSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => TimePeriodListRelationFilterSchema).optional(),
  HealthReport: _zod.z.lazy(() => HealthReportListRelationFilterSchema).optional()
}).strict();
var DietWhereInputSchema_default = DietWhereInputSchema;

// src/database/inputTypeSchemas/DietListRelationFilterSchema.ts
var DietListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => DietWhereInputSchema).optional(),
  some: _zod.z.lazy(() => DietWhereInputSchema).optional(),
  none: _zod.z.lazy(() => DietWhereInputSchema).optional()
}).strict();
var DietListRelationFilterSchema_default = DietListRelationFilterSchema;


























exports.DietListRelationFilterSchema = DietListRelationFilterSchema; exports.DietListRelationFilterSchema_default = DietListRelationFilterSchema_default; exports.DietaryItemRelationFilterSchema = DietaryItemRelationFilterSchema; exports.DietaryItemRelationFilterSchema_default = DietaryItemRelationFilterSchema_default; exports.ServingWhereInputSchema = ServingWhereInputSchema; exports.ServingWhereInputSchema_default = ServingWhereInputSchema_default; exports.ServingListRelationFilterSchema = ServingListRelationFilterSchema; exports.ServingListRelationFilterSchema_default = ServingListRelationFilterSchema_default; exports.DietaryItemWhereInputSchema = DietaryItemWhereInputSchema; exports.DietaryItemWhereInputSchema_default = DietaryItemWhereInputSchema_default; exports.DietaryItemListRelationFilterSchema = DietaryItemListRelationFilterSchema; exports.DietaryItemListRelationFilterSchema_default = DietaryItemListRelationFilterSchema_default; exports.TimePeriodListRelationFilterSchema = TimePeriodListRelationFilterSchema; exports.TimePeriodListRelationFilterSchema_default = TimePeriodListRelationFilterSchema_default; exports.HealthReportWhereInputSchema = HealthReportWhereInputSchema; exports.HealthReportWhereInputSchema_default = HealthReportWhereInputSchema_default; exports.HealthReportListRelationFilterSchema = HealthReportListRelationFilterSchema; exports.HealthReportListRelationFilterSchema_default = HealthReportListRelationFilterSchema_default; exports.DietWhereInputSchema = DietWhereInputSchema; exports.DietWhereInputSchema_default = DietWhereInputSchema_default; exports.DietNullableRelationFilterSchema = DietNullableRelationFilterSchema; exports.DietNullableRelationFilterSchema_default = DietNullableRelationFilterSchema_default; exports.TimePeriodWhereInputSchema = TimePeriodWhereInputSchema; exports.TimePeriodWhereInputSchema_default = TimePeriodWhereInputSchema_default;
//# sourceMappingURL=chunk-ZGGHUMG7.cjs.map
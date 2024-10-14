"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkU2D6LPEOcjs = require('./chunk-U2D6LPEO.cjs');


var _chunkHR7DVN6Wcjs = require('./chunk-HR7DVN6W.cjs');


var _chunkJ5OYCDYGcjs = require('./chunk-J5OYCDYG.cjs');

// src/database/modelSchema/ServingSchema.ts
var _zod = require('zod');

// src/database/modelSchema/DietaryItemSchema.ts


// src/database/modelSchema/DietSchema.ts


// src/database/modelSchema/TimePeriodSchema.ts

var TimePeriodSchema = _zod.z.object({
  id: _zod.z.number().int(),
  start: _zod.z.coerce.date(),
  end: _zod.z.coerce.date().nullable(),
  dietId: _zod.z.string().nullable()
});
var TimePeriodPartialSchema = TimePeriodSchema.partial();
var TimePeriodWithRelationsSchema = TimePeriodSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietWithRelationsSchema).nullable()
}));
var TimePeriodPartialWithRelationsSchema = TimePeriodPartialSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietPartialWithRelationsSchema).nullable()
})).partial();
var TimePeriodWithPartialRelationsSchema = TimePeriodSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietPartialWithRelationsSchema).nullable()
}).partial());
var TimePeriodSchema_default = TimePeriodSchema;

// src/database/modelSchema/HealthReportSchema.ts

var HealthReportSchema = _zod.z.object({
  id: _zod.z.number().int(),
  title: _zod.z.string().nullable(),
  summary: _zod.z.string().nullable(),
  overall: _zod.z.number(),
  skin: _zod.z.number(),
  bloat: _zod.z.number(),
  weight_feeling: _zod.z.number(),
  fullness: _zod.z.number(),
  weight: _zod.z.number().nullable(),
  cardiacCapacity: _zod.z.number(),
  jawLine: _zod.z.number(),
  joints: _zod.z.number(),
  flexibility: _zod.z.number(),
  anxiety: _zod.z.number(),
  anxiety_desc: _zod.z.string().nullable(),
  mood_desc: _zod.z.string().nullable(),
  mood: _zod.z.number(),
  sexDrive: _zod.z.number(),
  intruisiveThoughts: _zod.z.number(),
  caffeineIntake: _zod.z.number(),
  glutenIntake: _zod.z.number(),
  sugarIntake: _zod.z.number(),
  artificialSweetenerIntake: _zod.z.number(),
  artificalDyes: _zod.z.number(),
  sleepQuality: _zod.z.number(),
  hydration: _zod.z.number(),
  twitching: _zod.z.number(),
  sleepHours: _zod.z.number().nullable(),
  calorie_est: _zod.z.number().int().nullable(),
  times_meals_more_than_gap_apart: _zod.z.number().int().nullable(),
  estHoursInExcessFast: _zod.z.number().nullable(),
  dietId: _zod.z.string().nullable(),
  created: _zod.z.coerce.date()
});
var HealthReportPartialSchema = HealthReportSchema.partial();
var HealthReportWithRelationsSchema = HealthReportSchema.merge(_zod.z.object({
  currentDiet: _zod.z.lazy(() => DietWithRelationsSchema).nullable()
}));
var HealthReportPartialWithRelationsSchema = HealthReportPartialSchema.merge(_zod.z.object({
  currentDiet: _zod.z.lazy(() => DietPartialWithRelationsSchema).nullable()
})).partial();
var HealthReportWithPartialRelationsSchema = HealthReportSchema.merge(_zod.z.object({
  currentDiet: _zod.z.lazy(() => DietPartialWithRelationsSchema).nullable()
}).partial());
var HealthReportSchema_default = HealthReportSchema;

// src/database/modelSchema/DietSchema.ts
var DietSchema = _zod.z.object({
  gf: _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema,
  fasting: _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema,
  cardioTraining: _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema,
  weightTraining: _chunkHR7DVN6Wcjs.TERTIARY_TOGGLESchema,
  goals: _chunkU2D6LPEOcjs.DIETARY_GOALSchema.array(),
  name: _zod.z.string(),
  summary: _zod.z.string().nullable(),
  activelyFollowing: _zod.z.boolean(),
  vegan: _zod.z.boolean(),
  pescatarian: _zod.z.boolean(),
  vegetarian: _zod.z.boolean(),
  carb: _zod.z.number().nullable(),
  pro: _zod.z.number().nullable(),
  fat: _zod.z.number().nullable(),
  created: _zod.z.coerce.date(),
  lastUpdate: _zod.z.coerce.date()
});
var DietPartialSchema = DietSchema.partial();
var DietWithRelationsSchema = DietSchema.merge(_zod.z.object({
  items: _zod.z.lazy(() => DietaryItemWithRelationsSchema).array(),
  periodsFollowed: _zod.z.lazy(() => TimePeriodWithRelationsSchema).array(),
  HealthReport: _zod.z.lazy(() => HealthReportWithRelationsSchema).array()
}));
var DietPartialWithRelationsSchema = DietPartialSchema.merge(_zod.z.object({
  items: _zod.z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: _zod.z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: _zod.z.lazy(() => HealthReportPartialWithRelationsSchema).array()
})).partial();
var DietWithPartialRelationsSchema = DietSchema.merge(_zod.z.object({
  items: _zod.z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: _zod.z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: _zod.z.lazy(() => HealthReportPartialWithRelationsSchema).array()
}).partial());
var DietSchema_default = DietSchema;

// src/database/modelSchema/DietaryItemSchema.ts
var DietaryItemSchema = _zod.z.object({
  id: _zod.z.number().int(),
  name: _zod.z.string(),
  barcode: _zod.z.string().nullable(),
  gi: _zod.z.number().int().nullable(),
  calsPerOz: _zod.z.number().nullable(),
  glutenFree: _zod.z.boolean(),
  minimalFructose: _zod.z.boolean(),
  natural: _zod.z.boolean(),
  organic: _zod.z.boolean(),
  impactScore: _zod.z.number()
});
var DietaryItemPartialSchema = DietaryItemSchema.partial();
var DietaryItemWithRelationsSchema = DietaryItemSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietWithRelationsSchema).array(),
  Serving: _zod.z.lazy(() => ServingWithRelationsSchema).array()
}));
var DietaryItemPartialWithRelationsSchema = DietaryItemPartialSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: _zod.z.lazy(() => ServingPartialWithRelationsSchema).array()
})).partial();
var DietaryItemWithPartialRelationsSchema = DietaryItemSchema.merge(_zod.z.object({
  Diet: _zod.z.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: _zod.z.lazy(() => ServingPartialWithRelationsSchema).array()
}).partial());
var DietaryItemSchema_default = DietaryItemSchema;

// src/database/modelSchema/ServingSchema.ts
var ServingSchema = _zod.z.object({
  quant_guess: _chunkJ5OYCDYGcjs.QUANTITY_GUESSSchema.nullable(),
  id: _zod.z.number().int(),
  dietaryItemId: _zod.z.number().int(),
  quant_oz: _zod.z.number().nullable()
});
var ServingPartialSchema = ServingSchema.partial();
var ServingWithRelationsSchema = ServingSchema.merge(_zod.z.object({
  item: _zod.z.lazy(() => DietaryItemWithRelationsSchema)
}));
var ServingPartialWithRelationsSchema = ServingPartialSchema.merge(_zod.z.object({
  item: _zod.z.lazy(() => DietaryItemPartialWithRelationsSchema)
})).partial();
var ServingWithPartialRelationsSchema = ServingSchema.merge(_zod.z.object({
  item: _zod.z.lazy(() => DietaryItemPartialWithRelationsSchema)
}).partial());
var ServingSchema_default = ServingSchema;
































exports.ServingSchema = ServingSchema; exports.ServingPartialSchema = ServingPartialSchema; exports.ServingWithRelationsSchema = ServingWithRelationsSchema; exports.ServingPartialWithRelationsSchema = ServingPartialWithRelationsSchema; exports.ServingWithPartialRelationsSchema = ServingWithPartialRelationsSchema; exports.ServingSchema_default = ServingSchema_default; exports.DietaryItemSchema = DietaryItemSchema; exports.DietaryItemPartialSchema = DietaryItemPartialSchema; exports.DietaryItemWithRelationsSchema = DietaryItemWithRelationsSchema; exports.DietaryItemPartialWithRelationsSchema = DietaryItemPartialWithRelationsSchema; exports.DietaryItemWithPartialRelationsSchema = DietaryItemWithPartialRelationsSchema; exports.DietaryItemSchema_default = DietaryItemSchema_default; exports.HealthReportSchema = HealthReportSchema; exports.HealthReportPartialSchema = HealthReportPartialSchema; exports.HealthReportWithRelationsSchema = HealthReportWithRelationsSchema; exports.HealthReportPartialWithRelationsSchema = HealthReportPartialWithRelationsSchema; exports.HealthReportWithPartialRelationsSchema = HealthReportWithPartialRelationsSchema; exports.HealthReportSchema_default = HealthReportSchema_default; exports.DietSchema = DietSchema; exports.DietPartialSchema = DietPartialSchema; exports.DietWithRelationsSchema = DietWithRelationsSchema; exports.DietPartialWithRelationsSchema = DietPartialWithRelationsSchema; exports.DietWithPartialRelationsSchema = DietWithPartialRelationsSchema; exports.DietSchema_default = DietSchema_default; exports.TimePeriodSchema = TimePeriodSchema; exports.TimePeriodPartialSchema = TimePeriodPartialSchema; exports.TimePeriodWithRelationsSchema = TimePeriodWithRelationsSchema; exports.TimePeriodPartialWithRelationsSchema = TimePeriodPartialWithRelationsSchema; exports.TimePeriodWithPartialRelationsSchema = TimePeriodWithPartialRelationsSchema; exports.TimePeriodSchema_default = TimePeriodSchema_default;
//# sourceMappingURL=chunk-6TQVTTJV.cjs.map
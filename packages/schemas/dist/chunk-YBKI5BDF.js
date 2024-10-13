import {
  DIETARY_GOALSchema
} from "./chunk-FV4V5SCW.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";
import {
  QUANTITY_GUESSSchema
} from "./chunk-D2I24YT2.js";

// src/database/modelSchema/ServingSchema.ts
import { z as z5 } from "zod";

// src/database/modelSchema/DietaryItemSchema.ts
import { z as z4 } from "zod";

// src/database/modelSchema/DietSchema.ts
import { z as z3 } from "zod";

// src/database/modelSchema/TimePeriodSchema.ts
import { z } from "zod";
var TimePeriodSchema = z.object({
  id: z.number().int(),
  start: z.coerce.date(),
  end: z.coerce.date().nullable(),
  dietId: z.string().nullable()
});
var TimePeriodPartialSchema = TimePeriodSchema.partial();
var TimePeriodWithRelationsSchema = TimePeriodSchema.merge(z.object({
  Diet: z.lazy(() => DietWithRelationsSchema).nullable()
}));
var TimePeriodPartialWithRelationsSchema = TimePeriodPartialSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable()
})).partial();
var TimePeriodWithPartialRelationsSchema = TimePeriodSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable()
}).partial());
var TimePeriodSchema_default = TimePeriodSchema;

// src/database/modelSchema/HealthReportSchema.ts
import { z as z2 } from "zod";
var HealthReportSchema = z2.object({
  id: z2.number().int(),
  title: z2.string().nullable(),
  summary: z2.string().nullable(),
  overall: z2.number(),
  skin: z2.number(),
  bloat: z2.number(),
  weight_feeling: z2.number(),
  fullness: z2.number(),
  weight: z2.number().nullable(),
  cardiacCapacity: z2.number(),
  jawLine: z2.number(),
  joints: z2.number(),
  flexibility: z2.number(),
  anxiety: z2.number(),
  anxiety_desc: z2.string().nullable(),
  mood_desc: z2.string().nullable(),
  mood: z2.number(),
  sexDrive: z2.number(),
  intruisiveThoughts: z2.number(),
  caffeineIntake: z2.number(),
  glutenIntake: z2.number(),
  sugarIntake: z2.number(),
  artificialSweetenerIntake: z2.number(),
  artificalDyes: z2.number(),
  sleepQuality: z2.number(),
  hydration: z2.number(),
  twitching: z2.number(),
  sleepHours: z2.number().nullable(),
  calorie_est: z2.number().int().nullable(),
  times_meals_more_than_gap_apart: z2.number().int().nullable(),
  estHoursInExcessFast: z2.number().nullable(),
  dietId: z2.string().nullable(),
  created: z2.coerce.date()
});
var HealthReportPartialSchema = HealthReportSchema.partial();
var HealthReportWithRelationsSchema = HealthReportSchema.merge(z2.object({
  currentDiet: z2.lazy(() => DietWithRelationsSchema).nullable()
}));
var HealthReportPartialWithRelationsSchema = HealthReportPartialSchema.merge(z2.object({
  currentDiet: z2.lazy(() => DietPartialWithRelationsSchema).nullable()
})).partial();
var HealthReportWithPartialRelationsSchema = HealthReportSchema.merge(z2.object({
  currentDiet: z2.lazy(() => DietPartialWithRelationsSchema).nullable()
}).partial());
var HealthReportSchema_default = HealthReportSchema;

// src/database/modelSchema/DietSchema.ts
var DietSchema = z3.object({
  gf: TERTIARY_TOGGLESchema,
  fasting: TERTIARY_TOGGLESchema,
  cardioTraining: TERTIARY_TOGGLESchema,
  weightTraining: TERTIARY_TOGGLESchema,
  goals: DIETARY_GOALSchema.array(),
  name: z3.string(),
  summary: z3.string().nullable(),
  activelyFollowing: z3.boolean(),
  vegan: z3.boolean(),
  pescatarian: z3.boolean(),
  vegetarian: z3.boolean(),
  carb: z3.number().nullable(),
  pro: z3.number().nullable(),
  fat: z3.number().nullable(),
  created: z3.coerce.date(),
  lastUpdate: z3.coerce.date()
});
var DietPartialSchema = DietSchema.partial();
var DietWithRelationsSchema = DietSchema.merge(z3.object({
  items: z3.lazy(() => DietaryItemWithRelationsSchema).array(),
  periodsFollowed: z3.lazy(() => TimePeriodWithRelationsSchema).array(),
  HealthReport: z3.lazy(() => HealthReportWithRelationsSchema).array()
}));
var DietPartialWithRelationsSchema = DietPartialSchema.merge(z3.object({
  items: z3.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: z3.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: z3.lazy(() => HealthReportPartialWithRelationsSchema).array()
})).partial();
var DietWithPartialRelationsSchema = DietSchema.merge(z3.object({
  items: z3.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: z3.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: z3.lazy(() => HealthReportPartialWithRelationsSchema).array()
}).partial());
var DietSchema_default = DietSchema;

// src/database/modelSchema/DietaryItemSchema.ts
var DietaryItemSchema = z4.object({
  id: z4.number().int(),
  name: z4.string(),
  barcode: z4.string().nullable(),
  gi: z4.number().int().nullable(),
  calsPerOz: z4.number().nullable(),
  glutenFree: z4.boolean(),
  minimalFructose: z4.boolean(),
  natural: z4.boolean(),
  organic: z4.boolean(),
  impactScore: z4.number()
});
var DietaryItemPartialSchema = DietaryItemSchema.partial();
var DietaryItemWithRelationsSchema = DietaryItemSchema.merge(z4.object({
  Diet: z4.lazy(() => DietWithRelationsSchema).array(),
  Serving: z4.lazy(() => ServingWithRelationsSchema).array()
}));
var DietaryItemPartialWithRelationsSchema = DietaryItemPartialSchema.merge(z4.object({
  Diet: z4.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: z4.lazy(() => ServingPartialWithRelationsSchema).array()
})).partial();
var DietaryItemWithPartialRelationsSchema = DietaryItemSchema.merge(z4.object({
  Diet: z4.lazy(() => DietPartialWithRelationsSchema).array(),
  Serving: z4.lazy(() => ServingPartialWithRelationsSchema).array()
}).partial());
var DietaryItemSchema_default = DietaryItemSchema;

// src/database/modelSchema/ServingSchema.ts
var ServingSchema = z5.object({
  quant_guess: QUANTITY_GUESSSchema.nullable(),
  id: z5.number().int(),
  dietaryItemId: z5.number().int(),
  quant_oz: z5.number().nullable()
});
var ServingPartialSchema = ServingSchema.partial();
var ServingWithRelationsSchema = ServingSchema.merge(z5.object({
  item: z5.lazy(() => DietaryItemWithRelationsSchema)
}));
var ServingPartialWithRelationsSchema = ServingPartialSchema.merge(z5.object({
  item: z5.lazy(() => DietaryItemPartialWithRelationsSchema)
})).partial();
var ServingWithPartialRelationsSchema = ServingSchema.merge(z5.object({
  item: z5.lazy(() => DietaryItemPartialWithRelationsSchema)
}).partial());
var ServingSchema_default = ServingSchema;

export {
  ServingSchema,
  ServingPartialSchema,
  ServingWithRelationsSchema,
  ServingPartialWithRelationsSchema,
  ServingWithPartialRelationsSchema,
  ServingSchema_default,
  DietaryItemSchema,
  DietaryItemPartialSchema,
  DietaryItemWithRelationsSchema,
  DietaryItemPartialWithRelationsSchema,
  DietaryItemWithPartialRelationsSchema,
  DietaryItemSchema_default,
  HealthReportSchema,
  HealthReportPartialSchema,
  HealthReportWithRelationsSchema,
  HealthReportPartialWithRelationsSchema,
  HealthReportWithPartialRelationsSchema,
  HealthReportSchema_default,
  DietSchema,
  DietPartialSchema,
  DietWithRelationsSchema,
  DietPartialWithRelationsSchema,
  DietWithPartialRelationsSchema,
  DietSchema_default,
  TimePeriodSchema,
  TimePeriodPartialSchema,
  TimePeriodWithRelationsSchema,
  TimePeriodPartialWithRelationsSchema,
  TimePeriodWithPartialRelationsSchema,
  TimePeriodSchema_default
};
//# sourceMappingURL=chunk-YBKI5BDF.js.map
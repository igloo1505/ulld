import {
  TimePeriodCreateNestedManyWithoutDietInputSchema
} from "./chunk-QC4S7AB6.js";
import {
  HealthReportCreateNestedManyWithoutCurrentDietInputSchema
} from "./chunk-IJOSCISU.js";
import {
  DietCreategoalsInputSchema
} from "./chunk-IAILIGMM.js";
import {
  DIETARY_GOALSchema
} from "./chunk-FV4V5SCW.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";

// src/database/inputTypeSchemas/DietCreateWithoutItemsInputSchema.ts
import { z } from "zod";
var DietCreateWithoutItemsInputSchema = z.object({
  name: z.string(),
  summary: z.string().optional().nullable(),
  activelyFollowing: z.boolean().optional(),
  gf: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  vegan: z.boolean().optional(),
  pescatarian: z.boolean().optional(),
  vegetarian: z.boolean().optional(),
  fasting: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  cardioTraining: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  weightTraining: z.lazy(() => TERTIARY_TOGGLESchema).optional(),
  carb: z.number().optional().nullable(),
  pro: z.number().optional().nullable(),
  fat: z.number().optional().nullable(),
  goals: z.union([z.lazy(() => DietCreategoalsInputSchema), z.lazy(() => DIETARY_GOALSchema).array()]).optional(),
  created: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  periodsFollowed: z.lazy(() => TimePeriodCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();
var DietCreateWithoutItemsInputSchema_default = DietCreateWithoutItemsInputSchema;

export {
  DietCreateWithoutItemsInputSchema,
  DietCreateWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-IIB3L6LN.js.map
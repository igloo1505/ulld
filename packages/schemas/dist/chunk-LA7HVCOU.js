import {
  DietaryItemCreateNestedManyWithoutDietInputSchema
} from "./chunk-WTMMB2NF.js";
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

// src/database/inputTypeSchemas/DietCreateWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietCreateWithoutPeriodsFollowedInputSchema = z.object({
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
  items: z.lazy(() => DietaryItemCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();
var DietCreateWithoutPeriodsFollowedInputSchema_default = DietCreateWithoutPeriodsFollowedInputSchema;

export {
  DietCreateWithoutPeriodsFollowedInputSchema,
  DietCreateWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-LA7HVCOU.js.map
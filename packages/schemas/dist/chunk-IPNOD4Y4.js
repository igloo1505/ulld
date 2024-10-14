import {
  TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema
} from "./chunk-OUBJDU5Y.js";
import {
  HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema
} from "./chunk-KXOGUAGK.js";
import {
  DietCreategoalsInputSchema
} from "./chunk-AYSFFIF5.js";
import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";

// src/database/inputTypeSchemas/DietUncheckedCreateWithoutItemsInputSchema.ts
import { z } from "zod";
var DietUncheckedCreateWithoutItemsInputSchema = z.object({
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
  periodsFollowed: z.lazy(() => TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();
var DietUncheckedCreateWithoutItemsInputSchema_default = DietUncheckedCreateWithoutItemsInputSchema;

export {
  DietUncheckedCreateWithoutItemsInputSchema,
  DietUncheckedCreateWithoutItemsInputSchema_default
};
//# sourceMappingURL=chunk-IPNOD4Y4.js.map
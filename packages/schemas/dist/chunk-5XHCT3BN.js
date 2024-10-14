import {
  DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema
} from "./chunk-DPS2VAKH.js";
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

// src/database/inputTypeSchemas/DietUncheckedCreateWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietUncheckedCreateWithoutPeriodsFollowedInputSchema = z.object({
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
  items: z.lazy(() => DietaryItemUncheckedCreateNestedManyWithoutDietInputSchema).optional(),
  HealthReport: z.lazy(() => HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema).optional()
}).strict();
var DietUncheckedCreateWithoutPeriodsFollowedInputSchema_default = DietUncheckedCreateWithoutPeriodsFollowedInputSchema;

export {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema,
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-5XHCT3BN.js.map
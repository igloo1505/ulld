import {
  DietCreategoalsInputSchema
} from "./chunk-IAILIGMM.js";
import {
  DIETARY_GOALSchema
} from "./chunk-FV4V5SCW.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-XO3OVOME.js";

// src/database/inputTypeSchemas/DietCreateManyInputSchema.ts
import { z } from "zod";
var DietCreateManyInputSchema = z.object({
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
  lastUpdate: z.coerce.date().optional()
}).strict();
var DietCreateManyInputSchema_default = DietCreateManyInputSchema;

export {
  DietCreateManyInputSchema,
  DietCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-5FTTXKXX.js.map
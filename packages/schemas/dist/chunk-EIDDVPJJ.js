import {
  DietCreategoalsInputSchema
} from "./chunk-AYSFFIF5.js";
import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";
import {
  TERTIARY_TOGGLESchema
} from "./chunk-FGDZJV6T.js";

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
//# sourceMappingURL=chunk-EIDDVPJJ.js.map
import {
  DietCountOutputTypeSelectSchema
} from "./chunk-VO2O6LN5.js";

// src/database/outputTypeSchemas/DietCountOutputTypeArgsSchema.ts
import { z } from "zod";
var DietCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => DietCountOutputTypeSelectSchema).nullish()
}).strict();
var DietCountOutputTypeArgsSchema_default = DietCountOutputTypeSelectSchema;

export {
  DietCountOutputTypeArgsSchema,
  DietCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-FIAJ5STT.js.map
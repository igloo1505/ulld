import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";

// src/database/inputTypeSchemas/DietCreategoalsInputSchema.ts
import { z } from "zod";
var DietCreategoalsInputSchema = z.object({
  set: z.lazy(() => DIETARY_GOALSchema).array()
}).strict();
var DietCreategoalsInputSchema_default = DietCreategoalsInputSchema;

export {
  DietCreategoalsInputSchema,
  DietCreategoalsInputSchema_default
};
//# sourceMappingURL=chunk-AYSFFIF5.js.map
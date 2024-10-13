import {
  DIETARY_GOALSchema
} from "./chunk-FV4V5SCW.js";

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
//# sourceMappingURL=chunk-IAILIGMM.js.map
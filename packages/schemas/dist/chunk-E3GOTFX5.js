import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";

// src/database/inputTypeSchemas/DietUpdategoalsInputSchema.ts
import { z } from "zod";
var DietUpdategoalsInputSchema = z.object({
  set: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  push: z.union([z.lazy(() => DIETARY_GOALSchema), z.lazy(() => DIETARY_GOALSchema).array()]).optional()
}).strict();
var DietUpdategoalsInputSchema_default = DietUpdategoalsInputSchema;

export {
  DietUpdategoalsInputSchema,
  DietUpdategoalsInputSchema_default
};
//# sourceMappingURL=chunk-E3GOTFX5.js.map
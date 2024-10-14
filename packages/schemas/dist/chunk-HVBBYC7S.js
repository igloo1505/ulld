import {
  DietaryItemCountOutputTypeSelectSchema
} from "./chunk-RNIPPCR5.js";

// src/database/outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema.ts
import { z } from "zod";
var DietaryItemCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => DietaryItemCountOutputTypeSelectSchema).nullish()
}).strict();
var DietaryItemCountOutputTypeArgsSchema_default = DietaryItemCountOutputTypeSelectSchema;

export {
  DietaryItemCountOutputTypeArgsSchema,
  DietaryItemCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-HVBBYC7S.js.map
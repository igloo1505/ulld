import {
  DietaryItemCountOutputTypeSelectSchema
} from "./chunk-E7GDDNFK.js";

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
//# sourceMappingURL=chunk-WK5AC27N.js.map
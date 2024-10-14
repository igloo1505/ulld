import {
  DietCountOutputTypeSelectSchema
} from "./chunk-QLHQ3CC4.js";

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
//# sourceMappingURL=chunk-F7WREYKP.js.map
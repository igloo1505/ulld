import {
  CitationsGroupCountOutputTypeSelectSchema
} from "./chunk-R5BMEYNI.js";

// src/database/outputTypeSchemas/CitationsGroupCountOutputTypeArgsSchema.ts
import { z } from "zod";
var CitationsGroupCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => CitationsGroupCountOutputTypeSelectSchema).nullish()
}).strict();
var CitationsGroupCountOutputTypeArgsSchema_default = CitationsGroupCountOutputTypeSelectSchema;

export {
  CitationsGroupCountOutputTypeArgsSchema,
  CitationsGroupCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-TOYFH24E.js.map
import {
  TagCountOutputTypeSelectSchema
} from "./chunk-HS65EQJV.js";

// src/database/outputTypeSchemas/TagCountOutputTypeArgsSchema.ts
import { z } from "zod";
var TagCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish()
}).strict();
var TagCountOutputTypeArgsSchema_default = TagCountOutputTypeSelectSchema;

export {
  TagCountOutputTypeArgsSchema,
  TagCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-QJKI7ITL.js.map
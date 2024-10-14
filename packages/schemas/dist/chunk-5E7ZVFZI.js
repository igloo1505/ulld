import {
  TagCountOutputTypeSelectSchema
} from "./chunk-V6BG62CV.js";

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
//# sourceMappingURL=chunk-5E7ZVFZI.js.map
import {
  SubjectCountOutputTypeSelectSchema
} from "./chunk-FX6IAE5C.js";

// src/database/outputTypeSchemas/SubjectCountOutputTypeArgsSchema.ts
import { z } from "zod";
var SubjectCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => SubjectCountOutputTypeSelectSchema).nullish()
}).strict();
var SubjectCountOutputTypeArgsSchema_default = SubjectCountOutputTypeSelectSchema;

export {
  SubjectCountOutputTypeArgsSchema,
  SubjectCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-5IJIZO25.js.map
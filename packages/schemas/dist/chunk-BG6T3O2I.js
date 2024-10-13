import {
  SubjectCountOutputTypeSelectSchema
} from "./chunk-57N76VWD.js";

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
//# sourceMappingURL=chunk-BG6T3O2I.js.map
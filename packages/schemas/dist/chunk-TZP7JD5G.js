import {
  EquationCountOutputTypeSelectSchema
} from "./chunk-KO3BF3RW.js";

// src/database/outputTypeSchemas/EquationCountOutputTypeArgsSchema.ts
import { z } from "zod";
var EquationCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => EquationCountOutputTypeSelectSchema).nullish()
}).strict();
var EquationCountOutputTypeArgsSchema_default = EquationCountOutputTypeSelectSchema;

export {
  EquationCountOutputTypeArgsSchema,
  EquationCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-TZP7JD5G.js.map
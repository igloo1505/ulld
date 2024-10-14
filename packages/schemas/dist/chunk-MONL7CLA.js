import {
  EquationCountOutputTypeSelectSchema
} from "./chunk-3WHBANT2.js";

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
//# sourceMappingURL=chunk-MONL7CLA.js.map
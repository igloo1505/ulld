import {
  DefinitionSelectSchema
} from "./chunk-PSXKR4LW.js";
import {
  DefinitionIncludeSchema
} from "./chunk-JV52BDQC.js";

// src/database/outputTypeSchemas/DefinitionArgsSchema.ts
import { z } from "zod";
var DefinitionArgsSchema = z.object({
  select: z.lazy(() => DefinitionSelectSchema).optional(),
  include: z.lazy(() => DefinitionIncludeSchema).optional()
}).strict();
var DefinitionArgsSchema_default = DefinitionArgsSchema;

export {
  DefinitionArgsSchema,
  DefinitionArgsSchema_default
};
//# sourceMappingURL=chunk-33V5MEVD.js.map
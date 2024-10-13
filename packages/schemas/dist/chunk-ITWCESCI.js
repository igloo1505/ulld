import {
  DefinitionSelectSchema
} from "./chunk-4CQQW5BL.js";
import {
  DefinitionIncludeSchema
} from "./chunk-YNCDDFUC.js";

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
//# sourceMappingURL=chunk-ITWCESCI.js.map
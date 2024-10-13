import {
  DefinitionUncheckedUpdateManyInputSchema
} from "./chunk-XCMX7NWT.js";
import {
  DefinitionUpdateManyMutationInputSchema
} from "./chunk-IBXMIRC4.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/DefinitionUpdateManyArgsSchema.ts
import { z } from "zod";
var DefinitionUpdateManyArgsSchema = z.object({
  data: z.union([DefinitionUpdateManyMutationInputSchema, DefinitionUncheckedUpdateManyInputSchema]),
  where: DefinitionWhereInputSchema.optional()
}).strict();
var DefinitionUpdateManyArgsSchema_default = DefinitionUpdateManyArgsSchema;

export {
  DefinitionUpdateManyArgsSchema,
  DefinitionUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-4LCAINBY.js.map
import {
  DefinitionUncheckedUpdateManyInputSchema
} from "./chunk-DCHA3KWL.js";
import {
  DefinitionUpdateManyMutationInputSchema
} from "./chunk-M6OP4QMI.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-L26BUE5M.js.map
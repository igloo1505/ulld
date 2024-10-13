import {
  ToDoUncheckedUpdateManyInputSchema
} from "./chunk-SF3FEFVS.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-5JCH7EHC.js";
import {
  ToDoWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ToDoUpdateManyArgsSchema.ts
import { z } from "zod";
var ToDoUpdateManyArgsSchema = z.object({
  data: z.union([ToDoUpdateManyMutationInputSchema, ToDoUncheckedUpdateManyInputSchema]),
  where: ToDoWhereInputSchema.optional()
}).strict();
var ToDoUpdateManyArgsSchema_default = ToDoUpdateManyArgsSchema;

export {
  ToDoUpdateManyArgsSchema,
  ToDoUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ECGANSWS.js.map
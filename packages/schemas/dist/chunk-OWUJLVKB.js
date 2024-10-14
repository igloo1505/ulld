import {
  ToDoUncheckedUpdateManyInputSchema
} from "./chunk-OXN2CJBX.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";
import {
  ToDoWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-OWUJLVKB.js.map
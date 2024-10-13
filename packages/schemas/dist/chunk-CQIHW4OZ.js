import {
  ToDoListUncheckedUpdateManyInputSchema
} from "./chunk-5R7Q34ZS.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-7ZXOI24M.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ToDoListUpdateManyArgsSchema.ts
import { z } from "zod";
var ToDoListUpdateManyArgsSchema = z.object({
  data: z.union([ToDoListUpdateManyMutationInputSchema, ToDoListUncheckedUpdateManyInputSchema]),
  where: ToDoListWhereInputSchema.optional()
}).strict();
var ToDoListUpdateManyArgsSchema_default = ToDoListUpdateManyArgsSchema;

export {
  ToDoListUpdateManyArgsSchema,
  ToDoListUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-CQIHW4OZ.js.map
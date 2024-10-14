import {
  ToDoListUncheckedUpdateManyInputSchema
} from "./chunk-P6AA4SSZ.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-WWKNDWP7.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-FU53COAP.js.map
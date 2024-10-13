import {
  ToDoListUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-XXYJHNGZ.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-ESLLAAZ2.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-7ZXOI24M.js";

// src/database/inputTypeSchemas/ToDoListUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => ToDoListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoListUpdateManyMutationInputSchema), z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoListUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  ToDoListUpdateManyWithWhereWithoutTopicsInputSchema,
  ToDoListUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-NHPOMEZR.js.map
import {
  ToDoListUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-XOLLFEOY.js";
import {
  ToDoListScalarWhereInputSchema
} from "./chunk-Y32CQS2U.js";
import {
  ToDoListUpdateManyMutationInputSchema
} from "./chunk-WWKNDWP7.js";

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
//# sourceMappingURL=chunk-GH72BPPO.js.map
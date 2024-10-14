import {
  ToDoUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-RF2JABNP.js";
import {
  ToDoScalarWhereInputSchema
} from "./chunk-QSWRLQUO.js";
import {
  ToDoUpdateManyMutationInputSchema
} from "./chunk-MYRHKTSP.js";

// src/database/inputTypeSchemas/ToDoUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => ToDoScalarWhereInputSchema),
  data: z.union([z.lazy(() => ToDoUpdateManyMutationInputSchema), z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default = ToDoUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  ToDoUpdateManyWithWhereWithoutTopicsInputSchema,
  ToDoUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-GVWLN7P5.js.map
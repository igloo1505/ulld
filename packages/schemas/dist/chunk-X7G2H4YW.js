import {
  TagUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-DZYBKLRW.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutTodoListInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutTodoListInputSchema_default = TagUpdateManyWithWhereWithoutTodoListInputSchema;

export {
  TagUpdateManyWithWhereWithoutTodoListInputSchema,
  TagUpdateManyWithWhereWithoutTodoListInputSchema_default
};
//# sourceMappingURL=chunk-X7G2H4YW.js.map
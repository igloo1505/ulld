import {
  TagUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-FHJV73QU.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-SS3PPR2U.js.map
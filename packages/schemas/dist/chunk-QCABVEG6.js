import {
  TopicUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-7M7C5GKX.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutTodoListInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutTodoListInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutTodoListInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutTodoListInputSchema_default = TopicUpdateManyWithWhereWithoutTodoListInputSchema;

export {
  TopicUpdateManyWithWhereWithoutTodoListInputSchema,
  TopicUpdateManyWithWhereWithoutTodoListInputSchema_default
};
//# sourceMappingURL=chunk-QCABVEG6.js.map
import {
  TopicUncheckedUpdateManyWithoutTodoListInputSchema
} from "./chunk-NMYI6NJH.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

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
//# sourceMappingURL=chunk-AOVUYBRR.js.map
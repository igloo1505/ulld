import {
  TopicUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-CPO5F25A.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutToDoInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutToDoInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutToDoInputSchema_default = TopicUpdateManyWithWhereWithoutToDoInputSchema;

export {
  TopicUpdateManyWithWhereWithoutToDoInputSchema,
  TopicUpdateManyWithWhereWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-S77BSFI6.js.map
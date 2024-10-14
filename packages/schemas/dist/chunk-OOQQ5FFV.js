import {
  TopicUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-O7GQ4JMX.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutKanbanInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutKanbanInputSchema_default = TopicUpdateManyWithWhereWithoutKanbanInputSchema;

export {
  TopicUpdateManyWithWhereWithoutKanbanInputSchema,
  TopicUpdateManyWithWhereWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-OOQQ5FFV.js.map
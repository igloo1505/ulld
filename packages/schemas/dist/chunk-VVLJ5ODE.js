import {
  TopicUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-EB37BYWC.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

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
//# sourceMappingURL=chunk-VVLJ5ODE.js.map
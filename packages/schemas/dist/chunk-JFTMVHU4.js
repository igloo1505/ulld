import {
  TopicUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-6J44YONP.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

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
//# sourceMappingURL=chunk-JFTMVHU4.js.map
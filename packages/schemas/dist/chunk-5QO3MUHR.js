import {
  TopicUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-JZJB7BYI.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutEquationsInputSchema_default = TopicUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  TopicUpdateManyWithWhereWithoutEquationsInputSchema,
  TopicUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-5QO3MUHR.js.map
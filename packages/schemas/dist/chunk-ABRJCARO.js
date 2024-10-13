import {
  TopicUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-VPYLMOQ6.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

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
//# sourceMappingURL=chunk-ABRJCARO.js.map
import {
  TopicUncheckedUpdateManyWithoutQAPairInputSchema
} from "./chunk-QWXDK7KT.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutQAPairInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutQAPairInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutQAPairInputSchema_default = TopicUpdateManyWithWhereWithoutQAPairInputSchema;

export {
  TopicUpdateManyWithWhereWithoutQAPairInputSchema,
  TopicUpdateManyWithWhereWithoutQAPairInputSchema_default
};
//# sourceMappingURL=chunk-R3FL4ELJ.js.map
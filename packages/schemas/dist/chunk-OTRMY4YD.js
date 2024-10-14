import {
  TopicUncheckedUpdateManyWithoutQAPairInputSchema
} from "./chunk-O3CNQ2CB.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

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
//# sourceMappingURL=chunk-OTRMY4YD.js.map
import {
  TopicUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-MQCGVCBW.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TopicUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  TopicUpdateManyWithWhereWithoutMdxNotesInputSchema,
  TopicUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-T2TQFBSK.js.map
import {
  TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-NS663FS6.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-KIX4MGHT.js.map
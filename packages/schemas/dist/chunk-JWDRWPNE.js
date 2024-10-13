import {
  TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-YXSW5N5R.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

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
//# sourceMappingURL=chunk-JWDRWPNE.js.map
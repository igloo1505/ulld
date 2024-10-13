import {
  TopicUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-FD6A3G7J.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

// src/database/inputTypeSchemas/TopicUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TopicUpdateManyWithWhereWithoutBibEntriesInputSchema;

export {
  TopicUpdateManyWithWhereWithoutBibEntriesInputSchema,
  TopicUpdateManyWithWhereWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-A6M7YE5Q.js.map
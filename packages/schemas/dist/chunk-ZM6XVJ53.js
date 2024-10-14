import {
  TopicUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-AJCMW6YS.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-JO42GRGQ.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-GTZXPOVP.js";

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
//# sourceMappingURL=chunk-ZM6XVJ53.js.map
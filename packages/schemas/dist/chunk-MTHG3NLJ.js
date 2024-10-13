import {
  TopicUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-7QEOEQO4.js";
import {
  TopicScalarWhereInputSchema
} from "./chunk-PUIGZNQT.js";
import {
  TopicUpdateManyMutationInputSchema
} from "./chunk-DKW6L6LM.js";

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
//# sourceMappingURL=chunk-MTHG3NLJ.js.map
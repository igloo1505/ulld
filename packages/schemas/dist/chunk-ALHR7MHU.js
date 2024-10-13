import {
  TagUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-Y5V6SZLL.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default = TagUpdateManyWithWhereWithoutBibEntriesInputSchema;

export {
  TagUpdateManyWithWhereWithoutBibEntriesInputSchema,
  TagUpdateManyWithWhereWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-ALHR7MHU.js.map
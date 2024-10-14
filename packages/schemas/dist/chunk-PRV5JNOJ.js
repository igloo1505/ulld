import {
  TagUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-UZKQLX64.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

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
//# sourceMappingURL=chunk-PRV5JNOJ.js.map
import {
  TagUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-3PUACFST.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutKanbanInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutKanbanInputSchema_default = TagUpdateManyWithWhereWithoutKanbanInputSchema;

export {
  TagUpdateManyWithWhereWithoutKanbanInputSchema,
  TagUpdateManyWithWhereWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-FUSDFXPS.js.map
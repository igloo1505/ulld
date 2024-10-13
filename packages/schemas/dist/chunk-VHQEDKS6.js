import {
  TagUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-M5Y4EUQW.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-VHQEDKS6.js.map
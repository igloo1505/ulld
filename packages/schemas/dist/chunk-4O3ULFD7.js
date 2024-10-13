import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-4CHYYD2M.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-6X624NPU.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/KanbanUpdateToOneWithWhereWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUpdateToOneWithWhereWithoutListsInputSchema = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)])
}).strict();
var KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema;

export {
  KanbanUpdateToOneWithWhereWithoutListsInputSchema,
  KanbanUpdateToOneWithWhereWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-4O3ULFD7.js.map
import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-4CHYYD2M.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-6X624NPU.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-JDQBNOBK.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-S4ZEZQOI.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/KanbanUpsertWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUpsertWithoutListsInputSchema = z.object({
  update: z.union([z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)]),
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
var KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema;

export {
  KanbanUpsertWithoutListsInputSchema,
  KanbanUpsertWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-327BVH4X.js.map
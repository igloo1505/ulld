import {
  KanbanUpdateToOneWithWhereWithoutListsInputSchema
} from "./chunk-4O3ULFD7.js";
import {
  KanbanUpsertWithoutListsInputSchema
} from "./chunk-327BVH4X.js";
import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-4CHYYD2M.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-6X624NPU.js";
import {
  KanbanCreateOrConnectWithoutListsInputSchema
} from "./chunk-RFG5MTAV.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-JDQBNOBK.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-S4ZEZQOI.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-2ED7MBMQ.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/KanbanUpdateOneWithoutListsNestedInputSchema.ts
import { z } from "zod";
var KanbanUpdateOneWithoutListsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutListsInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => KanbanUpdateToOneWithWhereWithoutListsInputSchema), z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)]).optional()
}).strict();
var KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema;

export {
  KanbanUpdateOneWithoutListsNestedInputSchema,
  KanbanUpdateOneWithoutListsNestedInputSchema_default
};
//# sourceMappingURL=chunk-LE2EVO57.js.map
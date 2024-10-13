import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-2QE7ZMRA.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-2ZSM6PJQ.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListCreateOrConnectWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([z.lazy(() => KanBanListCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutKanbanInputSchema_default = KanBanListCreateOrConnectWithoutKanbanInputSchema;

export {
  KanBanListCreateOrConnectWithoutKanbanInputSchema,
  KanBanListCreateOrConnectWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-FW65FSB4.js.map
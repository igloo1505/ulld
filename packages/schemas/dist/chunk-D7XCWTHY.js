import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-4PVNN6WI.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-OZ4RHXWN.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

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
//# sourceMappingURL=chunk-D7XCWTHY.js.map
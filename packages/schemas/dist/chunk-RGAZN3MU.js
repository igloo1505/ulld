import {
  KanBanListUncheckedUpdateWithoutKanbanInputSchema
} from "./chunk-FATSFTBR.js";
import {
  KanBanListUpdateWithoutKanbanInputSchema
} from "./chunk-YQEUUJPM.js";
import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-2QE7ZMRA.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-2ZSM6PJQ.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

// src/database/inputTypeSchemas/KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  update: z.union([z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema)]),
  create: z.union([z.lazy(() => KanBanListCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema;

export {
  KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema,
  KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-RGAZN3MU.js.map
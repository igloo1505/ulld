import {
  KanBanListUncheckedUpdateWithoutKanbanInputSchema
} from "./chunk-YPUL62UN.js";
import {
  KanBanListUpdateWithoutKanbanInputSchema
} from "./chunk-XIPFSBQR.js";
import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-4PVNN6WI.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-OZ4RHXWN.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

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
//# sourceMappingURL=chunk-NK4TMYKU.js.map
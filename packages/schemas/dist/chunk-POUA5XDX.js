import {
  KanBanListUncheckedUpdateWithoutKanbanInputSchema
} from "./chunk-YPUL62UN.js";
import {
  KanBanListUpdateWithoutKanbanInputSchema
} from "./chunk-XIPFSBQR.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

// src/database/inputTypeSchemas/KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  data: z.union([z.lazy(() => KanBanListUpdateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default = KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema;

export {
  KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema,
  KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-POUA5XDX.js.map
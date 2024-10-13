import {
  KanBanListUncheckedUpdateWithoutKanbanInputSchema
} from "./chunk-FATSFTBR.js";
import {
  KanBanListUpdateWithoutKanbanInputSchema
} from "./chunk-YQEUUJPM.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

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
//# sourceMappingURL=chunk-IPTKJSSW.js.map
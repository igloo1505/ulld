import {
  KanBanListScalarWhereInputSchema
} from "./chunk-UXPZ7XSP.js";
import {
  KanBanListUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-DJT56GUJ.js";
import {
  KanBanListUpdateManyMutationInputSchema
} from "./chunk-KFDBDV3W.js";

// src/database/inputTypeSchemas/KanBanListUpdateManyWithWhereWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema = z.object({
  where: z.lazy(() => KanBanListScalarWhereInputSchema),
  data: z.union([z.lazy(() => KanBanListUpdateManyMutationInputSchema), z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanInputSchema)])
}).strict();
var KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default = KanBanListUpdateManyWithWhereWithoutKanbanInputSchema;

export {
  KanBanListUpdateManyWithWhereWithoutKanbanInputSchema,
  KanBanListUpdateManyWithWhereWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-3C66WQHP.js.map
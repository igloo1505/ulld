import {
  KanBanListScalarWhereInputSchema
} from "./chunk-3P7XCSQ7.js";
import {
  KanBanListUncheckedUpdateManyWithoutKanbanInputSchema
} from "./chunk-BCH63A2Q.js";
import {
  KanBanListUpdateManyMutationInputSchema
} from "./chunk-R22CADQY.js";

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
//# sourceMappingURL=chunk-53ZL664Q.js.map
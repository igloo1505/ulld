import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-2JD2EYJY.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-FMC2PLNJ.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/KanbanUpdateToOneWithWhereWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUpdateToOneWithWhereWithoutListsInputSchema = z.object({
  where: z.lazy(() => KanbanWhereInputSchema).optional(),
  data: z.union([z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)])
}).strict();
var KanbanUpdateToOneWithWhereWithoutListsInputSchema_default = KanbanUpdateToOneWithWhereWithoutListsInputSchema;

export {
  KanbanUpdateToOneWithWhereWithoutListsInputSchema,
  KanbanUpdateToOneWithWhereWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-53ZQJY2A.js.map
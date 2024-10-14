import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-2JD2EYJY.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-FMC2PLNJ.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-XS7XXG3Z.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-W4N7VV73.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/KanbanUpsertWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanUpsertWithoutListsInputSchema = z.object({
  update: z.union([z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)]),
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]),
  where: z.lazy(() => KanbanWhereInputSchema).optional()
}).strict();
var KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema;

export {
  KanbanUpsertWithoutListsInputSchema,
  KanbanUpsertWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-XOJGIHAW.js.map
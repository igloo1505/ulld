import {
  KanbanUpdateToOneWithWhereWithoutListsInputSchema
} from "./chunk-53ZQJY2A.js";
import {
  KanbanUpsertWithoutListsInputSchema
} from "./chunk-XOJGIHAW.js";
import {
  KanbanUncheckedUpdateWithoutListsInputSchema
} from "./chunk-2JD2EYJY.js";
import {
  KanbanUpdateWithoutListsInputSchema
} from "./chunk-FMC2PLNJ.js";
import {
  KanbanCreateOrConnectWithoutListsInputSchema
} from "./chunk-TMQFSW6S.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-XS7XXG3Z.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-W4N7VV73.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-YCFKQOM4.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/KanbanUpdateOneWithoutListsNestedInputSchema.ts
import { z } from "zod";
var KanbanUpdateOneWithoutListsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  upsert: z.lazy(() => KanbanUpsertWithoutListsInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => KanbanWhereInputSchema)]).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => KanbanUpdateToOneWithWhereWithoutListsInputSchema), z.lazy(() => KanbanUpdateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedUpdateWithoutListsInputSchema)]).optional()
}).strict();
var KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema;

export {
  KanbanUpdateOneWithoutListsNestedInputSchema,
  KanbanUpdateOneWithoutListsNestedInputSchema_default
};
//# sourceMappingURL=chunk-KODE43QT.js.map
import {
  KanBanListCreateManyKanbanInputEnvelopeSchema
} from "./chunk-TBQXSF4T.js";
import {
  KanBanListCreateOrConnectWithoutKanbanInputSchema
} from "./chunk-FW65FSB4.js";
import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-2QE7ZMRA.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-2ZSM6PJQ.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

// src/database/inputTypeSchemas/KanBanListCreateNestedManyWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListCreateNestedManyWithoutKanbanInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanListCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListCreateWithoutKanbanInputSchema).array(), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema), z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  createMany: z.lazy(() => KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => KanBanListWhereUniqueInputSchema), z.lazy(() => KanBanListWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanListCreateNestedManyWithoutKanbanInputSchema_default = KanBanListCreateNestedManyWithoutKanbanInputSchema;

export {
  KanBanListCreateNestedManyWithoutKanbanInputSchema,
  KanBanListCreateNestedManyWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-UM4W3DXK.js.map
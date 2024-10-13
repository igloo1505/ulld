import {
  KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema
} from "./chunk-IPTKJSSW.js";
import {
  KanBanListUpdateManyWithWhereWithoutKanbanInputSchema
} from "./chunk-3C66WQHP.js";
import {
  KanBanListScalarWhereInputSchema
} from "./chunk-UXPZ7XSP.js";
import {
  KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema
} from "./chunk-RGAZN3MU.js";
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

// src/database/inputTypeSchemas/KanBanListUpdateManyWithoutKanbanNestedInputSchema.ts
import { z } from "zod";
var KanBanListUpdateManyWithoutKanbanNestedInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanListCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListCreateWithoutKanbanInputSchema).array(), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutKanbanInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema), z.lazy(() => KanBanListCreateOrConnectWithoutKanbanInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema), z.lazy(() => KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  createMany: z.lazy(() => KanBanListCreateManyKanbanInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => KanBanListWhereUniqueInputSchema), z.lazy(() => KanBanListWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KanBanListWhereUniqueInputSchema), z.lazy(() => KanBanListWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KanBanListWhereUniqueInputSchema), z.lazy(() => KanBanListWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KanBanListWhereUniqueInputSchema), z.lazy(() => KanBanListWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema), z.lazy(() => KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KanBanListUpdateManyWithWhereWithoutKanbanInputSchema), z.lazy(() => KanBanListUpdateManyWithWhereWithoutKanbanInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KanBanListScalarWhereInputSchema), z.lazy(() => KanBanListScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanListUpdateManyWithoutKanbanNestedInputSchema_default = KanBanListUpdateManyWithoutKanbanNestedInputSchema;

export {
  KanBanListUpdateManyWithoutKanbanNestedInputSchema,
  KanBanListUpdateManyWithoutKanbanNestedInputSchema_default
};
//# sourceMappingURL=chunk-FDLRNLYM.js.map
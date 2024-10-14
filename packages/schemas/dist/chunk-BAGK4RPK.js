import {
  KanBanListUpdateWithWhereUniqueWithoutKanbanInputSchema
} from "./chunk-POUA5XDX.js";
import {
  KanBanListUpdateManyWithWhereWithoutKanbanInputSchema
} from "./chunk-53ZL664Q.js";
import {
  KanBanListScalarWhereInputSchema
} from "./chunk-3P7XCSQ7.js";
import {
  KanBanListUpsertWithWhereUniqueWithoutKanbanInputSchema
} from "./chunk-NK4TMYKU.js";
import {
  KanBanListCreateManyKanbanInputEnvelopeSchema
} from "./chunk-XBM7TZON.js";
import {
  KanBanListCreateOrConnectWithoutKanbanInputSchema
} from "./chunk-D7XCWTHY.js";
import {
  KanBanListCreateWithoutKanbanInputSchema
} from "./chunk-4PVNN6WI.js";
import {
  KanBanListUncheckedCreateWithoutKanbanInputSchema
} from "./chunk-OZ4RHXWN.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

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
//# sourceMappingURL=chunk-BAGK4RPK.js.map
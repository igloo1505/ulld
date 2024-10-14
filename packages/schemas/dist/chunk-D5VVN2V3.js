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
//# sourceMappingURL=chunk-D5VVN2V3.js.map
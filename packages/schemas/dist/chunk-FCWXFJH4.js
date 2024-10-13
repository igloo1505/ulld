import {
  KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema
} from "./chunk-E26NQQ3X.js";
import {
  KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema
} from "./chunk-JWIIMEAM.js";
import {
  KanBanCardScalarWhereInputSchema
} from "./chunk-2XEB7A4M.js";
import {
  KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema
} from "./chunk-FRUAEGWQ.js";
import {
  KanBanCardCreateManyKanBanListInputEnvelopeSchema
} from "./chunk-DP3JS6VE.js";
import {
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema
} from "./chunk-DDDDPWON.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-ROU7NOMX.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-PMHR2V6T.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

// src/database/inputTypeSchemas/KanBanCardUpdateManyWithoutKanBanListNestedInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateManyWithoutKanBanListNestedInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => KanBanCardScalarWhereInputSchema), z.lazy(() => KanBanCardScalarWhereInputSchema).array()]).optional()
}).strict();
var KanBanCardUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUpdateManyWithoutKanBanListNestedInputSchema;

export {
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema,
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema_default
};
//# sourceMappingURL=chunk-FCWXFJH4.js.map
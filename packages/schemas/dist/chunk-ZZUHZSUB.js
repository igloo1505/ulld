import {
  KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema
} from "./chunk-VE7FMAVJ.js";
import {
  KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema
} from "./chunk-KKL7MINP.js";
import {
  KanBanCardScalarWhereInputSchema
} from "./chunk-F4SW4UTX.js";
import {
  KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema
} from "./chunk-QOK5CGBR.js";
import {
  KanBanCardCreateManyKanBanListInputEnvelopeSchema
} from "./chunk-H4MTV5UF.js";
import {
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema
} from "./chunk-INEPJBO4.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-5Z5OUN6K.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-GGTAOTRC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema = z.object({
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
var KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema;

export {
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema,
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema_default
};
//# sourceMappingURL=chunk-ZZUHZSUB.js.map
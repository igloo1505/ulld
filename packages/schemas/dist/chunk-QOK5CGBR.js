import {
  KanBanCardUpdateWithoutKanBanListInputSchema
} from "./chunk-TRDUBIAR.js";
import {
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema
} from "./chunk-VG2GXC6T.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-5Z5OUN6K.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-GGTAOTRC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/inputTypeSchemas/KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  update: z.union([z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)]),
  create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema;

export {
  KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema,
  KanBanCardUpsertWithWhereUniqueWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-QOK5CGBR.js.map
import {
  KanBanCardUpdateWithoutKanBanListInputSchema
} from "./chunk-TRDUBIAR.js";
import {
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema
} from "./chunk-VG2GXC6T.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/inputTypeSchemas/KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  data: z.union([z.lazy(() => KanBanCardUpdateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedUpdateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default = KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema;

export {
  KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema,
  KanBanCardUpdateWithWhereUniqueWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-VE7FMAVJ.js.map
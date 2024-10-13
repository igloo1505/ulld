import {
  KanBanCardUpdateWithoutKanBanListInputSchema
} from "./chunk-XEX7WN53.js";
import {
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema
} from "./chunk-KBJH6RAW.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-ROU7NOMX.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-PMHR2V6T.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

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
//# sourceMappingURL=chunk-FRUAEGWQ.js.map
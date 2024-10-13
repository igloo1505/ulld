import {
  KanBanCardUpdateWithoutKanBanListInputSchema
} from "./chunk-XEX7WN53.js";
import {
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema
} from "./chunk-KBJH6RAW.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

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
//# sourceMappingURL=chunk-E26NQQ3X.js.map
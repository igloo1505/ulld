import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-6RJLJSDP.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-ERB4MM5B.js";
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-FKPYXRCN.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-7O3IDCBP.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/KanBanListUpsertWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListUpsertWithoutCardsInputSchema = z.object({
  update: z.union([z.lazy(() => KanBanListUpdateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema)]),
  create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)]),
  where: z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();
var KanBanListUpsertWithoutCardsInputSchema_default = KanBanListUpsertWithoutCardsInputSchema;

export {
  KanBanListUpsertWithoutCardsInputSchema,
  KanBanListUpsertWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-EHZSNK2M.js.map
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-FKPYXRCN.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-7O3IDCBP.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

// src/database/inputTypeSchemas/KanBanListCreateOrConnectWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListCreateOrConnectWithoutCardsInputSchema = z.object({
  where: z.lazy(() => KanBanListWhereUniqueInputSchema),
  create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)])
}).strict();
var KanBanListCreateOrConnectWithoutCardsInputSchema_default = KanBanListCreateOrConnectWithoutCardsInputSchema;

export {
  KanBanListCreateOrConnectWithoutCardsInputSchema,
  KanBanListCreateOrConnectWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-3N4EVDPR.js.map
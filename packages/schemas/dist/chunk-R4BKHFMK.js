import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-H2TH33HA.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-NRFGJW76.js";
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-JMQGC5D4.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-T5N47SQK.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-R4BKHFMK.js.map
import {
  KanBanListCreateOrConnectWithoutCardsInputSchema
} from "./chunk-3N4EVDPR.js";
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-FKPYXRCN.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-7O3IDCBP.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-QD6ZFSZE.js";

// src/database/inputTypeSchemas/KanBanListCreateNestedOneWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListCreateNestedOneWithoutCardsInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional()
}).strict();
var KanBanListCreateNestedOneWithoutCardsInputSchema_default = KanBanListCreateNestedOneWithoutCardsInputSchema;

export {
  KanBanListCreateNestedOneWithoutCardsInputSchema,
  KanBanListCreateNestedOneWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-UEKW6RO2.js.map
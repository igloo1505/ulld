import {
  KanBanListUpdateToOneWithWhereWithoutCardsInputSchema
} from "./chunk-BCLET6F6.js";
import {
  KanBanListUpsertWithoutCardsInputSchema
} from "./chunk-EHZSNK2M.js";
import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-6RJLJSDP.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-ERB4MM5B.js";
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
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/KanBanListUpdateOneWithoutCardsNestedInputSchema.ts
import { z } from "zod";
var KanBanListUpdateOneWithoutCardsNestedInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanListCreateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedCreateWithoutCardsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => KanBanListCreateOrConnectWithoutCardsInputSchema).optional(),
  upsert: z.lazy(() => KanBanListUpsertWithoutCardsInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => KanBanListWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => KanBanListWhereInputSchema)]).optional(),
  connect: z.lazy(() => KanBanListWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => KanBanListUpdateToOneWithWhereWithoutCardsInputSchema), z.lazy(() => KanBanListUpdateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema)]).optional()
}).strict();
var KanBanListUpdateOneWithoutCardsNestedInputSchema_default = KanBanListUpdateOneWithoutCardsNestedInputSchema;

export {
  KanBanListUpdateOneWithoutCardsNestedInputSchema,
  KanBanListUpdateOneWithoutCardsNestedInputSchema_default
};
//# sourceMappingURL=chunk-HVED4PLW.js.map
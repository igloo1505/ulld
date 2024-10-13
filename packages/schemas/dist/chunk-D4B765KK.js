import {
  KanBanListUpdateToOneWithWhereWithoutCardsInputSchema
} from "./chunk-XWBLV673.js";
import {
  KanBanListUpsertWithoutCardsInputSchema
} from "./chunk-R4BKHFMK.js";
import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-H2TH33HA.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-NRFGJW76.js";
import {
  KanBanListCreateOrConnectWithoutCardsInputSchema
} from "./chunk-TL5CV2UE.js";
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-JMQGC5D4.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-T5N47SQK.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-D4B765KK.js.map
import {
  KanBanListCreateWithoutCardsInputSchema
} from "./chunk-JMQGC5D4.js";
import {
  KanBanListUncheckedCreateWithoutCardsInputSchema
} from "./chunk-T5N47SQK.js";
import {
  KanBanListWhereUniqueInputSchema
} from "./chunk-Q7SPJQ4F.js";

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
//# sourceMappingURL=chunk-TL5CV2UE.js.map
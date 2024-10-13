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
//# sourceMappingURL=chunk-MEWTLPQ4.js.map
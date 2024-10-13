import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-H2TH33HA.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-NRFGJW76.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/inputTypeSchemas/KanBanListUpdateToOneWithWhereWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema = z.object({
  where: z.lazy(() => KanBanListWhereInputSchema).optional(),
  data: z.union([z.lazy(() => KanBanListUpdateWithoutCardsInputSchema), z.lazy(() => KanBanListUncheckedUpdateWithoutCardsInputSchema)])
}).strict();
var KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default = KanBanListUpdateToOneWithWhereWithoutCardsInputSchema;

export {
  KanBanListUpdateToOneWithWhereWithoutCardsInputSchema,
  KanBanListUpdateToOneWithWhereWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-XWBLV673.js.map
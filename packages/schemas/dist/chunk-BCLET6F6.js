import {
  KanBanListUncheckedUpdateWithoutCardsInputSchema
} from "./chunk-6RJLJSDP.js";
import {
  KanBanListUpdateWithoutCardsInputSchema
} from "./chunk-ERB4MM5B.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-BCLET6F6.js.map
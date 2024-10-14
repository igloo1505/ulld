import {
  KanBanCardScalarWhereInputSchema
} from "./chunk-F4SW4UTX.js";
import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema
} from "./chunk-63JFI33A.js";
import {
  KanBanCardUpdateManyMutationInputSchema
} from "./chunk-YLAOVKK7.js";

// src/database/inputTypeSchemas/KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema = z.object({
  where: z.lazy(() => KanBanCardScalarWhereInputSchema),
  data: z.union([z.lazy(() => KanBanCardUpdateManyMutationInputSchema), z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default = KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema;

export {
  KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema,
  KanBanCardUpdateManyWithWhereWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-KKL7MINP.js.map
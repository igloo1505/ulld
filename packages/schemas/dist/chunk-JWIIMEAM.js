import {
  KanBanCardScalarWhereInputSchema
} from "./chunk-2XEB7A4M.js";
import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema
} from "./chunk-EFXHJEQK.js";
import {
  KanBanCardUpdateManyMutationInputSchema
} from "./chunk-EBWVRG4T.js";

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
//# sourceMappingURL=chunk-JWIIMEAM.js.map
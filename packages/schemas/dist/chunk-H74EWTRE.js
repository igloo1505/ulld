import {
  KanBanListUncheckedUpdateManyInputSchema
} from "./chunk-K5MNBEY5.js";
import {
  KanBanListUpdateManyMutationInputSchema
} from "./chunk-KFDBDV3W.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanListUpdateManyArgsSchema.ts
import { z } from "zod";
var KanBanListUpdateManyArgsSchema = z.object({
  data: z.union([KanBanListUpdateManyMutationInputSchema, KanBanListUncheckedUpdateManyInputSchema]),
  where: KanBanListWhereInputSchema.optional()
}).strict();
var KanBanListUpdateManyArgsSchema_default = KanBanListUpdateManyArgsSchema;

export {
  KanBanListUpdateManyArgsSchema,
  KanBanListUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-H74EWTRE.js.map
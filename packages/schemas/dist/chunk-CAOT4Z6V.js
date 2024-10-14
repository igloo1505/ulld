import {
  KanBanListUncheckedUpdateManyInputSchema
} from "./chunk-7UGZKQSH.js";
import {
  KanBanListUpdateManyMutationInputSchema
} from "./chunk-R22CADQY.js";
import {
  KanBanListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-CAOT4Z6V.js.map
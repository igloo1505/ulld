import {
  KanBanCardUncheckedUpdateManyInputSchema
} from "./chunk-STSE2XPW.js";
import {
  KanBanCardUpdateManyMutationInputSchema
} from "./chunk-EBWVRG4T.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanCardUpdateManyArgsSchema.ts
import { z } from "zod";
var KanBanCardUpdateManyArgsSchema = z.object({
  data: z.union([KanBanCardUpdateManyMutationInputSchema, KanBanCardUncheckedUpdateManyInputSchema]),
  where: KanBanCardWhereInputSchema.optional()
}).strict();
var KanBanCardUpdateManyArgsSchema_default = KanBanCardUpdateManyArgsSchema;

export {
  KanBanCardUpdateManyArgsSchema,
  KanBanCardUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-CLTZOF6Q.js.map
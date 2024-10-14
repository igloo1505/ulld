import {
  KanBanCardUncheckedUpdateManyInputSchema
} from "./chunk-UU2S5HGI.js";
import {
  KanBanCardUpdateManyMutationInputSchema
} from "./chunk-YLAOVKK7.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-E2YNW3ZE.js.map
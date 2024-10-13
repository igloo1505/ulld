import {
  KanBanCardCreateInputSchema
} from "./chunk-UFWGHIQD.js";
import {
  KanBanCardUncheckedCreateInputSchema
} from "./chunk-KNSKGLSR.js";
import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/KanBanCardCreateArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardCreateArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  data: z.union([KanBanCardCreateInputSchema, KanBanCardUncheckedCreateInputSchema])
}).strict();
var KanBanCardCreateArgsSchema_default = KanBanCardCreateArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardCreateArgsSchema,
  KanBanCardCreateArgsSchema_default
};
//# sourceMappingURL=chunk-ZJKKZ3QE.js.map
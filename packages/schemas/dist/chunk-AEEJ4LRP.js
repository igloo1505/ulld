import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/outputTypeSchemas/KanBanCardDeleteArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardDeleteArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardDeleteArgsSchema_default = KanBanCardDeleteArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardDeleteArgsSchema,
  KanBanCardDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-AEEJ4LRP.js.map
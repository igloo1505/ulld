import {
  KanBanCardUncheckedUpdateInputSchema
} from "./chunk-VOEKQHTN.js";
import {
  KanBanCardUpdateInputSchema
} from "./chunk-A67OKRUB.js";
import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/outputTypeSchemas/KanBanCardUpdateArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpdateArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  data: z.union([KanBanCardUpdateInputSchema, KanBanCardUncheckedUpdateInputSchema]),
  where: KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardUpdateArgsSchema_default = KanBanCardUpdateArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardUpdateArgsSchema,
  KanBanCardUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-HZ3VUPZI.js.map
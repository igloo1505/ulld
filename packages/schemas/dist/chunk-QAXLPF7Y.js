import {
  KanBanCardCreateInputSchema
} from "./chunk-S5EOHRSA.js";
import {
  KanBanCardUncheckedCreateInputSchema
} from "./chunk-XWO6ON65.js";
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

// src/database/outputTypeSchemas/KanBanCardUpsertArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpsertArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereUniqueInputSchema,
  create: z.union([KanBanCardCreateInputSchema, KanBanCardUncheckedCreateInputSchema]),
  update: z.union([KanBanCardUpdateInputSchema, KanBanCardUncheckedUpdateInputSchema])
}).strict();
var KanBanCardUpsertArgsSchema_default = KanBanCardUpsertArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardUpsertArgsSchema,
  KanBanCardUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-QAXLPF7Y.js.map
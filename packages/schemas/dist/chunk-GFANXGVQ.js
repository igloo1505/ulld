import {
  KanBanCardCreateInputSchema
} from "./chunk-UFWGHIQD.js";
import {
  KanBanCardUncheckedCreateInputSchema
} from "./chunk-KNSKGLSR.js";
import {
  KanBanCardUncheckedUpdateInputSchema
} from "./chunk-47XLXHDH.js";
import {
  KanBanCardUpdateInputSchema
} from "./chunk-TVLCKRC5.js";
import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

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
//# sourceMappingURL=chunk-GFANXGVQ.js.map
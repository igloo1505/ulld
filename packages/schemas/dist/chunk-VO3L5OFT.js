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
//# sourceMappingURL=chunk-VO3L5OFT.js.map
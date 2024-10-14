import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanCardOrderByWithRelationInputSchema
} from "./chunk-DZXYR76P.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";
import {
  KanBanCardScalarFieldEnumSchema
} from "./chunk-FXL2P2MF.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/KanBanCardFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([KanBanCardOrderByWithRelationInputSchema.array(), KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanBanCardScalarFieldEnumSchema, KanBanCardScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema_default = KanBanCardFindFirstOrThrowArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardFindFirstOrThrowArgsSchema,
  KanBanCardFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-E6TUOX42.js.map
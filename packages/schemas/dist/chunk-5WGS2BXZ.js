import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  KanBanCardOrderByWithRelationInputSchema
} from "./chunk-GETLPK5J.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";
import {
  KanBanCardScalarFieldEnumSchema
} from "./chunk-ONWJJVRE.js";
import {
  KanBanCardWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanBanCardFindFirstArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindFirstArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([KanBanCardOrderByWithRelationInputSchema.array(), KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([KanBanCardScalarFieldEnumSchema, KanBanCardScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanCardFindFirstArgsSchema_default = KanBanCardFindFirstArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardFindFirstArgsSchema,
  KanBanCardFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-5WGS2BXZ.js.map
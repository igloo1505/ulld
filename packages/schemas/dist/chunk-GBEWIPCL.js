import {
  KanBanCardIncludeSchema,
  KanBanListArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/outputTypeSchemas/KanBanCardFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindUniqueOrThrowArgsSchema = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardFindUniqueOrThrowArgsSchema_default = KanBanCardFindUniqueOrThrowArgsSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardFindUniqueOrThrowArgsSchema,
  KanBanCardFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-GBEWIPCL.js.map
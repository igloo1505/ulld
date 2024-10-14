import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-VR7H2BAL.js";

// src/database/outputTypeSchemas/BibFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibFindUniqueOrThrowArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereUniqueInputSchema
}).strict();
var BibFindUniqueOrThrowArgsSchema_default = BibFindUniqueOrThrowArgsSchema;

export {
  BibSelectSchema,
  BibFindUniqueOrThrowArgsSchema,
  BibFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-GDMDGUM2.js.map
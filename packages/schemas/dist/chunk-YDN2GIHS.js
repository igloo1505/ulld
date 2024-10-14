import {
  BibCreateInputSchema
} from "./chunk-LIZEM3GN.js";
import {
  BibUncheckedCreateInputSchema
} from "./chunk-IUHJYXRM.js";
import {
  BibUpdateInputSchema
} from "./chunk-K6TCKDHI.js";
import {
  BibUncheckedUpdateInputSchema
} from "./chunk-RMHRUTIT.js";
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

// src/database/outputTypeSchemas/BibUpsertArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibUpsertArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereUniqueInputSchema,
  create: z.union([BibCreateInputSchema, BibUncheckedCreateInputSchema]),
  update: z.union([BibUpdateInputSchema, BibUncheckedUpdateInputSchema])
}).strict();
var BibUpsertArgsSchema_default = BibUpsertArgsSchema;

export {
  BibSelectSchema,
  BibUpsertArgsSchema,
  BibUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-YDN2GIHS.js.map
import {
  BibCreateInputSchema
} from "./chunk-LIZEM3GN.js";
import {
  BibUncheckedCreateInputSchema
} from "./chunk-IUHJYXRM.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-VR7H2BAL.js";

// src/database/outputTypeSchemas/BibCreateArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibCreateArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  data: z.union([BibCreateInputSchema, BibUncheckedCreateInputSchema])
}).strict();
var BibCreateArgsSchema_default = BibCreateArgsSchema;

export {
  BibSelectSchema,
  BibCreateArgsSchema,
  BibCreateArgsSchema_default
};
//# sourceMappingURL=chunk-5MN274JI.js.map
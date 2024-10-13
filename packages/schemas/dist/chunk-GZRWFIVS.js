import {
  BibUpdateInputSchema
} from "./chunk-UOPNXAZH.js";
import {
  BibUncheckedUpdateInputSchema
} from "./chunk-INQDRWE2.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-RPHQPYNG.js";

// src/database/outputTypeSchemas/BibUpdateArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibUpdateArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  data: z.union([BibUpdateInputSchema, BibUncheckedUpdateInputSchema]),
  where: BibWhereUniqueInputSchema
}).strict();
var BibUpdateArgsSchema_default = BibUpdateArgsSchema;

export {
  BibSelectSchema,
  BibUpdateArgsSchema,
  BibUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-GZRWFIVS.js.map
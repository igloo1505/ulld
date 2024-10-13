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

// src/database/outputTypeSchemas/BibDeleteArgsSchema.ts
import { z } from "zod";
var BibSelectSchema = z.object({
  id: z.boolean().optional(),
  filename: z.boolean().optional(),
  firstSync: z.boolean().optional(),
  lastSync: z.boolean().optional(),
  entries: z.union([z.boolean(), z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BibCountOutputTypeArgsSchema)]).optional()
}).strict();
var BibDeleteArgsSchema = z.object({
  select: BibSelectSchema.optional(),
  include: BibIncludeSchema.optional(),
  where: BibWhereUniqueInputSchema
}).strict();
var BibDeleteArgsSchema_default = BibDeleteArgsSchema;

export {
  BibSelectSchema,
  BibDeleteArgsSchema,
  BibDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-3JFGJBTZ.js.map
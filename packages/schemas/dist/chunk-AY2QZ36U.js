import {
  BibCreateInputSchema
} from "./chunk-XMYBAYOK.js";
import {
  BibUncheckedCreateInputSchema
} from "./chunk-QQ6UL2X3.js";
import {
  BibEntryFindManyArgsSchema,
  BibIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  BibCountOutputTypeArgsSchema
} from "./chunk-RPHQPYNG.js";

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
//# sourceMappingURL=chunk-AY2QZ36U.js.map
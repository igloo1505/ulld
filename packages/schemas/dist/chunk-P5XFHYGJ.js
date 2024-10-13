import {
  BibCreateInputSchema
} from "./chunk-XMYBAYOK.js";
import {
  BibUncheckedCreateInputSchema
} from "./chunk-QQ6UL2X3.js";
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
//# sourceMappingURL=chunk-P5XFHYGJ.js.map
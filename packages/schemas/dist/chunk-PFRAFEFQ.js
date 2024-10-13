import {
  SequentialNoteListCreateInputSchema
} from "./chunk-US4J6M35.js";
import {
  SequentialNoteListUncheckedCreateInputSchema
} from "./chunk-CNKSK5PP.js";
import {
  SequentialNoteListUpdateInputSchema
} from "./chunk-TAOOZGRE.js";
import {
  SequentialNoteListUncheckedUpdateInputSchema
} from "./chunk-A4F2P7BY.js";
import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-ZZRAIUWH.js";
import {
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  SequentialNoteListIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  SequentialNoteListCountOutputTypeArgsSchema
} from "./chunk-DZJRDEHZ.js";

// src/database/outputTypeSchemas/SequentialNoteListUpsertArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListUpsertArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  where: SequentialNoteListWhereUniqueInputSchema,
  create: z.union([SequentialNoteListCreateInputSchema, SequentialNoteListUncheckedCreateInputSchema]),
  update: z.union([SequentialNoteListUpdateInputSchema, SequentialNoteListUncheckedUpdateInputSchema])
}).strict();
var SequentialNoteListUpsertArgsSchema_default = SequentialNoteListUpsertArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListUpsertArgsSchema,
  SequentialNoteListUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-PFRAFEFQ.js.map
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

// src/database/outputTypeSchemas/SequentialNoteListUpdateArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListUpdateArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  data: z.union([SequentialNoteListUpdateInputSchema, SequentialNoteListUncheckedUpdateInputSchema]),
  where: SequentialNoteListWhereUniqueInputSchema
}).strict();
var SequentialNoteListUpdateArgsSchema_default = SequentialNoteListUpdateArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListUpdateArgsSchema,
  SequentialNoteListUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-JID3EJOJ.js.map
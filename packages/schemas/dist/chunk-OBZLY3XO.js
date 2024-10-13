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

// src/database/outputTypeSchemas/SequentialNoteListFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindUniqueOrThrowArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  where: SequentialNoteListWhereUniqueInputSchema
}).strict();
var SequentialNoteListFindUniqueOrThrowArgsSchema_default = SequentialNoteListFindUniqueOrThrowArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListFindUniqueOrThrowArgsSchema,
  SequentialNoteListFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-OBZLY3XO.js.map
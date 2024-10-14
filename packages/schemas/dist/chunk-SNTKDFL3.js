import {
  SequentialNoteListUpdateInputSchema
} from "./chunk-E3I7E3UV.js";
import {
  SequentialNoteListUncheckedUpdateInputSchema
} from "./chunk-FE2ZTLSA.js";
import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-QSW5DW43.js";
import {
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  SequentialNoteListIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  SequentialNoteListCountOutputTypeArgsSchema
} from "./chunk-EOPW33NX.js";

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
//# sourceMappingURL=chunk-SNTKDFL3.js.map
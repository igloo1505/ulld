import {
  SequentialNoteListCreateInputSchema
} from "./chunk-US4J6M35.js";
import {
  SequentialNoteListUncheckedCreateInputSchema
} from "./chunk-CNKSK5PP.js";
import {
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  SequentialNoteListIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  SequentialNoteListCountOutputTypeArgsSchema
} from "./chunk-DZJRDEHZ.js";

// src/database/outputTypeSchemas/SequentialNoteListCreateArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListCreateArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  data: z.union([SequentialNoteListCreateInputSchema, SequentialNoteListUncheckedCreateInputSchema])
}).strict();
var SequentialNoteListCreateArgsSchema_default = SequentialNoteListCreateArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListCreateArgsSchema,
  SequentialNoteListCreateArgsSchema_default
};
//# sourceMappingURL=chunk-V4CTLUBD.js.map
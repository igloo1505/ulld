import {
  SequentialNoteListCreateInputSchema
} from "./chunk-5PJ6EYVS.js";
import {
  SequentialNoteListUncheckedCreateInputSchema
} from "./chunk-3DRF3QL5.js";
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
//# sourceMappingURL=chunk-G4RI4HNS.js.map
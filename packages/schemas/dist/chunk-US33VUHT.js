import {
  SequentialNoteListScalarFieldEnumSchema
} from "./chunk-PO4RRM7V.js";
import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-QSW5DW43.js";
import {
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  SequentialNoteListIncludeSchema
} from "./chunk-JV52BDQC.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-PMLTVZ4P.js";
import {
  SequentialNoteListCountOutputTypeArgsSchema
} from "./chunk-EOPW33NX.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/SequentialNoteListFindFirstArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindFirstArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([SequentialNoteListOrderByWithRelationInputSchema.array(), SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SequentialNoteListScalarFieldEnumSchema, SequentialNoteListScalarFieldEnumSchema.array()]).optional()
}).strict();
var SequentialNoteListFindFirstArgsSchema_default = SequentialNoteListFindFirstArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListFindFirstArgsSchema,
  SequentialNoteListFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-US33VUHT.js.map
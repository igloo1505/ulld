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

// src/database/outputTypeSchemas/SequentialNoteListFindManyArgsSchema.ts
import { z } from "zod";
var SequentialNoteListSelectSchema = z.object({
  sequentialKey: z.boolean().optional(),
  MdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  Ipynb: z.union([z.boolean(), z.lazy(() => IpynbFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SequentialNoteListCountOutputTypeArgsSchema)]).optional()
}).strict();
var SequentialNoteListFindManyArgsSchema = z.object({
  select: SequentialNoteListSelectSchema.optional(),
  include: SequentialNoteListIncludeSchema.optional(),
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([SequentialNoteListOrderByWithRelationInputSchema.array(), SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SequentialNoteListScalarFieldEnumSchema, SequentialNoteListScalarFieldEnumSchema.array()]).optional()
}).strict();
var SequentialNoteListFindManyArgsSchema_default = SequentialNoteListFindManyArgsSchema;

export {
  SequentialNoteListSelectSchema,
  SequentialNoteListFindManyArgsSchema,
  SequentialNoteListFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-L2U32YLW.js.map
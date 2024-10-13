import {
  SequentialNoteListScalarFieldEnumSchema
} from "./chunk-KWXMTVR4.js";
import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-ZZRAIUWH.js";
import {
  IpynbFindManyArgsSchema,
  MdxNoteFindManyArgsSchema,
  SequentialNoteListIncludeSchema
} from "./chunk-YNCDDFUC.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-GN7YBMGK.js";
import {
  SequentialNoteListCountOutputTypeArgsSchema
} from "./chunk-DZJRDEHZ.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-BDUJ7XBI.js.map
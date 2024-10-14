import {
  IpynbListRelationFilterSchema,
  MdxNoteListRelationFilterSchema,
  SequentialNoteListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema.ts
import { z } from "zod";
var SequentialNoteListWhereUniqueInputSchema = z.object({
  sequentialKey: z.string()
}).and(z.object({
  sequentialKey: z.string().optional(),
  AND: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  MdxNote: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  Ipynb: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict());
var SequentialNoteListWhereUniqueInputSchema_default = SequentialNoteListWhereUniqueInputSchema;

export {
  SequentialNoteListWhereUniqueInputSchema,
  SequentialNoteListWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-QSW5DW43.js.map
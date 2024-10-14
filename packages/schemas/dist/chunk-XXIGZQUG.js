import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-F3RQWPPB.js";
import {
  MdxNoteOrderByWithRelationInputSchema
} from "./chunk-6CNBKVCR.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/MdxNoteAggregateArgsSchema.ts
import { z } from "zod";
var MdxNoteAggregateArgsSchema = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([MdxNoteOrderByWithRelationInputSchema.array(), MdxNoteOrderByWithRelationInputSchema]).optional(),
  cursor: MdxNoteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MdxNoteAggregateArgsSchema_default = MdxNoteAggregateArgsSchema;

export {
  MdxNoteAggregateArgsSchema,
  MdxNoteAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-XXIGZQUG.js.map
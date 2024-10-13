import {
  MdxNoteWhereUniqueInputSchema
} from "./chunk-DG2EOAUQ.js";
import {
  MdxNoteOrderByWithRelationInputSchema
} from "./chunk-5DT76EW6.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-7NMICMZU.js.map
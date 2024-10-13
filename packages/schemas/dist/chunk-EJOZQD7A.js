import {
  MdxNoteOrderByWithAggregationInputSchema
} from "./chunk-4Z7G7AGD.js";
import {
  MdxNoteScalarWhereWithAggregatesInputSchema
} from "./chunk-GB6PS2AV.js";
import {
  MdxNoteScalarFieldEnumSchema
} from "./chunk-Z47AH73G.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/MdxNoteGroupByArgsSchema.ts
import { z } from "zod";
var MdxNoteGroupByArgsSchema = z.object({
  where: MdxNoteWhereInputSchema.optional(),
  orderBy: z.union([MdxNoteOrderByWithAggregationInputSchema.array(), MdxNoteOrderByWithAggregationInputSchema]).optional(),
  by: MdxNoteScalarFieldEnumSchema.array(),
  having: MdxNoteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var MdxNoteGroupByArgsSchema_default = MdxNoteGroupByArgsSchema;

export {
  MdxNoteGroupByArgsSchema,
  MdxNoteGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-EJOZQD7A.js.map
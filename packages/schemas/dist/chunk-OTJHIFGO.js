import {
  MdxNoteOrderByWithAggregationInputSchema
} from "./chunk-RQEVNNL3.js";
import {
  MdxNoteScalarWhereWithAggregatesInputSchema
} from "./chunk-GNLEMB74.js";
import {
  MdxNoteScalarFieldEnumSchema
} from "./chunk-C2DKK6P5.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-OTJHIFGO.js.map
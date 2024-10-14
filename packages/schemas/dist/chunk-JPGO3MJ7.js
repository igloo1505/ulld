import {
  NoteTypeOrderByWithRelationInputSchema
} from "./chunk-UBYVQS7W.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-FW7442IX.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-4ES4YADX.js";

// src/database/outputTypeSchemas/NoteTypeAggregateArgsSchema.ts
import { z } from "zod";
var NoteTypeAggregateArgsSchema = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([NoteTypeOrderByWithRelationInputSchema.array(), NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var NoteTypeAggregateArgsSchema_default = NoteTypeAggregateArgsSchema;

export {
  NoteTypeAggregateArgsSchema,
  NoteTypeAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-JPGO3MJ7.js.map
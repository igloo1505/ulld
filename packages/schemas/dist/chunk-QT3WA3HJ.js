import {
  NoteTypeOrderByWithRelationInputSchema
} from "./chunk-QOD4QEDN.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-BA7HRTM6.js";

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
//# sourceMappingURL=chunk-QT3WA3HJ.js.map
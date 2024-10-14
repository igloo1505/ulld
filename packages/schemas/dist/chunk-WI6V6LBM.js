import {
  NoteTypeScalarWhereWithAggregatesInputSchema
} from "./chunk-DW64MN52.js";
import {
  NoteTypeOrderByWithAggregationInputSchema
} from "./chunk-3PYAYR3O.js";
import {
  NoteTypeScalarFieldEnumSchema
} from "./chunk-YWVWF5WU.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-4ES4YADX.js";

// src/database/outputTypeSchemas/NoteTypeGroupByArgsSchema.ts
import { z } from "zod";
var NoteTypeGroupByArgsSchema = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([NoteTypeOrderByWithAggregationInputSchema.array(), NoteTypeOrderByWithAggregationInputSchema]).optional(),
  by: NoteTypeScalarFieldEnumSchema.array(),
  having: NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var NoteTypeGroupByArgsSchema_default = NoteTypeGroupByArgsSchema;

export {
  NoteTypeGroupByArgsSchema,
  NoteTypeGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-WI6V6LBM.js.map
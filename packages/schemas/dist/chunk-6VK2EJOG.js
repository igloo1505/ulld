import {
  NoteTypeScalarWhereWithAggregatesInputSchema
} from "./chunk-SDQUEP6N.js";
import {
  NoteTypeOrderByWithAggregationInputSchema
} from "./chunk-GPP3MDLU.js";
import {
  NoteTypeScalarFieldEnumSchema
} from "./chunk-LEIP7TJT.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-BA7HRTM6.js";

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
//# sourceMappingURL=chunk-6VK2EJOG.js.map
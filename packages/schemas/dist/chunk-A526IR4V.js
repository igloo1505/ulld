import {
  NoteTypeOrderByWithRelationInputSchema
} from "./chunk-UBYVQS7W.js";
import {
  NoteTypeScalarFieldEnumSchema
} from "./chunk-YWVWF5WU.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-FW7442IX.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-4ES4YADX.js";

// src/database/outputTypeSchemas/NoteTypeFindFirstArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeFindFirstArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([NoteTypeOrderByWithRelationInputSchema.array(), NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([NoteTypeScalarFieldEnumSchema, NoteTypeScalarFieldEnumSchema.array()]).optional()
}).strict();
var NoteTypeFindFirstArgsSchema_default = NoteTypeFindFirstArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeFindFirstArgsSchema,
  NoteTypeFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-A526IR4V.js.map
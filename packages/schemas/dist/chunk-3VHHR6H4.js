import {
  NoteTypeOrderByWithRelationInputSchema
} from "./chunk-QOD4QEDN.js";
import {
  NoteTypeScalarFieldEnumSchema
} from "./chunk-LEIP7TJT.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-BA7HRTM6.js";

// src/database/outputTypeSchemas/NoteTypeFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeFindFirstOrThrowArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([NoteTypeOrderByWithRelationInputSchema.array(), NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([NoteTypeScalarFieldEnumSchema, NoteTypeScalarFieldEnumSchema.array()]).optional()
}).strict();
var NoteTypeFindFirstOrThrowArgsSchema_default = NoteTypeFindFirstOrThrowArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeFindFirstOrThrowArgsSchema,
  NoteTypeFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-3VHHR6H4.js.map
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

// src/database/outputTypeSchemas/NoteTypeFindManyArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeFindManyArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([NoteTypeOrderByWithRelationInputSchema.array(), NoteTypeOrderByWithRelationInputSchema]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([NoteTypeScalarFieldEnumSchema, NoteTypeScalarFieldEnumSchema.array()]).optional()
}).strict();
var NoteTypeFindManyArgsSchema_default = NoteTypeFindManyArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeFindManyArgsSchema,
  NoteTypeFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-W7ZMN47H.js.map
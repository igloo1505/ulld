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
//# sourceMappingURL=chunk-36WULIH4.js.map
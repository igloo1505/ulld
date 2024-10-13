import {
  DefinitionCreateInputSchema
} from "./chunk-PT7PE66E.js";
import {
  DefinitionUncheckedCreateInputSchema
} from "./chunk-KRW3GLBP.js";
import {
  DefinitionUncheckedUpdateInputSchema
} from "./chunk-5TTNWLVU.js";
import {
  DefinitionUpdateInputSchema
} from "./chunk-WPRZ2XHA.js";
import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/outputTypeSchemas/DefinitionUpsertArgsSchema.ts
import { z } from "zod";
var DefinitionSelectSchema = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  content: z.boolean().optional(),
  alphabeticalLabel: z.boolean().optional(),
  mdxNoteId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  mdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteArgsSchema)]).optional()
}).strict();
var DefinitionUpsertArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereUniqueInputSchema,
  create: z.union([DefinitionCreateInputSchema, DefinitionUncheckedCreateInputSchema]),
  update: z.union([DefinitionUpdateInputSchema, DefinitionUncheckedUpdateInputSchema])
}).strict();
var DefinitionUpsertArgsSchema_default = DefinitionUpsertArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionUpsertArgsSchema,
  DefinitionUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-EWLS4MGA.js.map
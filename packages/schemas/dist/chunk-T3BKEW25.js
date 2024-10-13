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

// src/database/outputTypeSchemas/DefinitionUpdateArgsSchema.ts
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
var DefinitionUpdateArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  data: z.union([DefinitionUpdateInputSchema, DefinitionUncheckedUpdateInputSchema]),
  where: DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionUpdateArgsSchema_default = DefinitionUpdateArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionUpdateArgsSchema,
  DefinitionUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-T3BKEW25.js.map
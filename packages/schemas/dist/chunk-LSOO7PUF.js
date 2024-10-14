import {
  DefinitionUncheckedUpdateInputSchema
} from "./chunk-B6JTXSS4.js";
import {
  DefinitionUpdateInputSchema
} from "./chunk-PSMRMQQD.js";
import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";

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
//# sourceMappingURL=chunk-LSOO7PUF.js.map
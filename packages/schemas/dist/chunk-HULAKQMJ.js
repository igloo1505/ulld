import {
  DefinitionCreateInputSchema
} from "./chunk-6YSKPK6J.js";
import {
  DefinitionUncheckedCreateInputSchema
} from "./chunk-7T24ED3H.js";
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
//# sourceMappingURL=chunk-HULAKQMJ.js.map
import {
  DefinitionWhereInputSchema,
  MdxNoteNullableRelationFilterSchema,
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";
import {
  IntNullableFilterSchema
} from "./chunk-25XMO7OH.js";
import {
  StringNullableFilterSchema
} from "./chunk-2AUFJPNJ.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";

// src/database/inputTypeSchemas/DefinitionWhereUniqueInputSchema.ts
import { z } from "zod";
var DefinitionWhereUniqueInputSchema = z.object({
  id: z.string()
}).and(z.object({
  id: z.string().optional(),
  AND: z.union([z.lazy(() => DefinitionWhereInputSchema), z.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DefinitionWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => DefinitionWhereInputSchema), z.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  label: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  alphabeticalLabel: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  mdxNoteId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  mdxNote: z.union([z.lazy(() => MdxNoteNullableRelationFilterSchema), z.lazy(() => MdxNoteWhereInputSchema)]).optional().nullable()
}).strict());
var DefinitionWhereUniqueInputSchema_default = DefinitionWhereUniqueInputSchema;

export {
  DefinitionWhereUniqueInputSchema,
  DefinitionWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-6Q2POV45.js.map
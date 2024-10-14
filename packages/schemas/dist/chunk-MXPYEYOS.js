import {
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  ToDoFindManyArgsSchema,
  ToDoListIncludeSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  ToDoListCountOutputTypeArgsSchema
} from "./chunk-MLGRIOAU.js";
import {
  ToDoListWhereUniqueInputSchema
} from "./chunk-UYCDM7HT.js";
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-BL3DWYYH.js";
import {
  ToDoListScalarFieldEnumSchema
} from "./chunk-3LVCD5XQ.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/ToDoListFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var ToDoListSelectSchema = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastUpdate: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  tasks: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ToDoListCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoListFindFirstOrThrowArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereInputSchema.optional(),
  orderBy: z.union([ToDoListOrderByWithRelationInputSchema.array(), ToDoListOrderByWithRelationInputSchema]).optional(),
  cursor: ToDoListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ToDoListScalarFieldEnumSchema, ToDoListScalarFieldEnumSchema.array()]).optional()
}).strict();
var ToDoListFindFirstOrThrowArgsSchema_default = ToDoListFindFirstOrThrowArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListFindFirstOrThrowArgsSchema,
  ToDoListFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-MXPYEYOS.js.map
import {
  MdxNoteFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  ToDoArgsSchema,
  ToDoFindManyArgsSchema,
  ToDoIncludeSchema,
  ToDoListArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  ToDoCountOutputTypeArgsSchema
} from "./chunk-LQIFIZ2N.js";
import {
  ToDoOrderByWithRelationInputSchema
} from "./chunk-7XO7TOEK.js";
import {
  ToDoWhereUniqueInputSchema
} from "./chunk-7WISUQHK.js";
import {
  ToDoScalarFieldEnumSchema
} from "./chunk-XQBZ7VQK.js";
import {
  ToDoWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ToDoFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var ToDoSelectSchema = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  task: z.boolean().optional(),
  dueAt: z.boolean().optional(),
  details: z.boolean().optional(),
  parentId: z.boolean().optional(),
  category: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  status: z.boolean().optional(),
  priority: z.boolean().optional(),
  toDoListId: z.boolean().optional(),
  completedOn: z.boolean().optional(),
  associatedNotes: z.union([z.boolean(), z.lazy(() => MdxNoteFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => TagFindManyArgsSchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicFindManyArgsSchema)]).optional(),
  subjects: z.union([z.boolean(), z.lazy(() => SubjectFindManyArgsSchema)]).optional(),
  parent: z.union([z.boolean(), z.lazy(() => ToDoArgsSchema)]).optional(),
  child: z.union([z.boolean(), z.lazy(() => ToDoFindManyArgsSchema)]).optional(),
  ToDoList: z.union([z.boolean(), z.lazy(() => ToDoListArgsSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ToDoCountOutputTypeArgsSchema)]).optional()
}).strict();
var ToDoFindFirstOrThrowArgsSchema = z.object({
  select: ToDoSelectSchema.optional(),
  include: ToDoIncludeSchema.optional(),
  where: ToDoWhereInputSchema.optional(),
  orderBy: z.union([ToDoOrderByWithRelationInputSchema.array(), ToDoOrderByWithRelationInputSchema]).optional(),
  cursor: ToDoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ToDoScalarFieldEnumSchema, ToDoScalarFieldEnumSchema.array()]).optional()
}).strict();
var ToDoFindFirstOrThrowArgsSchema_default = ToDoFindFirstOrThrowArgsSchema;

export {
  ToDoSelectSchema,
  ToDoFindFirstOrThrowArgsSchema,
  ToDoFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-GUHKPFDW.js.map
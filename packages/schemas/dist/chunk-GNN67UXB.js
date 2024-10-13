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
  ToDoWhereUniqueInputSchema
} from "./chunk-7WISUQHK.js";

// src/database/outputTypeSchemas/ToDoFindUniqueArgsSchema.ts
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
var ToDoFindUniqueArgsSchema = z.object({
  select: ToDoSelectSchema.optional(),
  include: ToDoIncludeSchema.optional(),
  where: ToDoWhereUniqueInputSchema
}).strict();
var ToDoFindUniqueArgsSchema_default = ToDoFindUniqueArgsSchema;

export {
  ToDoSelectSchema,
  ToDoFindUniqueArgsSchema,
  ToDoFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-GNN67UXB.js.map
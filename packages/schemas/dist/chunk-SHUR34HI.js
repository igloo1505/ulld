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

// src/database/outputTypeSchemas/ToDoListFindUniqueOrThrowArgsSchema.ts
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
var ToDoListFindUniqueOrThrowArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereUniqueInputSchema
}).strict();
var ToDoListFindUniqueOrThrowArgsSchema_default = ToDoListFindUniqueOrThrowArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListFindUniqueOrThrowArgsSchema,
  ToDoListFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-SHUR34HI.js.map
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

// src/database/outputTypeSchemas/ToDoListDeleteArgsSchema.ts
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
var ToDoListDeleteArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereUniqueInputSchema
}).strict();
var ToDoListDeleteArgsSchema_default = ToDoListDeleteArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListDeleteArgsSchema,
  ToDoListDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-JPUAAE6R.js.map
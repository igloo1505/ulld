import {
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  ToDoFindManyArgsSchema,
  ToDoListIncludeSchema,
  TopicFindManyArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  ToDoListCountOutputTypeArgsSchema
} from "./chunk-IPX2ZV5G.js";
import {
  ToDoListWhereUniqueInputSchema
} from "./chunk-HMQ6R4MC.js";

// src/database/outputTypeSchemas/ToDoListFindUniqueArgsSchema.ts
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
var ToDoListFindUniqueArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereUniqueInputSchema
}).strict();
var ToDoListFindUniqueArgsSchema_default = ToDoListFindUniqueArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListFindUniqueArgsSchema,
  ToDoListFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-IXWC2QOP.js.map
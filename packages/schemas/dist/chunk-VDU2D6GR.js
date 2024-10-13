import {
  ToDoListCreateInputSchema
} from "./chunk-TW25UU2O.js";
import {
  ToDoListUncheckedCreateInputSchema
} from "./chunk-4M7G42IO.js";
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

// src/database/outputTypeSchemas/ToDoListCreateArgsSchema.ts
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
var ToDoListCreateArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  data: z.union([ToDoListCreateInputSchema, ToDoListUncheckedCreateInputSchema])
}).strict();
var ToDoListCreateArgsSchema_default = ToDoListCreateArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListCreateArgsSchema,
  ToDoListCreateArgsSchema_default
};
//# sourceMappingURL=chunk-VDU2D6GR.js.map
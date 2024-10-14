import {
  ToDoCreateInputSchema
} from "./chunk-W5CS42XV.js";
import {
  ToDoUncheckedCreateInputSchema
} from "./chunk-IG2RIF4F.js";
import {
  ToDoUncheckedUpdateInputSchema
} from "./chunk-TLEBBJIH.js";
import {
  ToDoUpdateInputSchema
} from "./chunk-PE5HTCQB.js";
import {
  MdxNoteFindManyArgsSchema,
  SubjectFindManyArgsSchema,
  TagFindManyArgsSchema,
  ToDoArgsSchema,
  ToDoFindManyArgsSchema,
  ToDoIncludeSchema,
  ToDoListArgsSchema,
  TopicFindManyArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  ToDoCountOutputTypeArgsSchema
} from "./chunk-3TXDSUBT.js";
import {
  ToDoWhereUniqueInputSchema
} from "./chunk-H7M4P6XR.js";

// src/database/outputTypeSchemas/ToDoUpsertArgsSchema.ts
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
var ToDoUpsertArgsSchema = z.object({
  select: ToDoSelectSchema.optional(),
  include: ToDoIncludeSchema.optional(),
  where: ToDoWhereUniqueInputSchema,
  create: z.union([ToDoCreateInputSchema, ToDoUncheckedCreateInputSchema]),
  update: z.union([ToDoUpdateInputSchema, ToDoUncheckedUpdateInputSchema])
}).strict();
var ToDoUpsertArgsSchema_default = ToDoUpsertArgsSchema;

export {
  ToDoSelectSchema,
  ToDoUpsertArgsSchema,
  ToDoUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-CN7OVPR2.js.map
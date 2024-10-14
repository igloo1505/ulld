import {
  ToDoListCreateInputSchema
} from "./chunk-FAGK3Q3V.js";
import {
  ToDoListUncheckedCreateInputSchema
} from "./chunk-MII3GMP5.js";
import {
  ToDoListUncheckedUpdateInputSchema
} from "./chunk-Z3CDV75R.js";
import {
  ToDoListUpdateInputSchema
} from "./chunk-4O4YHXEC.js";
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

// src/database/outputTypeSchemas/ToDoListUpsertArgsSchema.ts
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
var ToDoListUpsertArgsSchema = z.object({
  select: ToDoListSelectSchema.optional(),
  include: ToDoListIncludeSchema.optional(),
  where: ToDoListWhereUniqueInputSchema,
  create: z.union([ToDoListCreateInputSchema, ToDoListUncheckedCreateInputSchema]),
  update: z.union([ToDoListUpdateInputSchema, ToDoListUncheckedUpdateInputSchema])
}).strict();
var ToDoListUpsertArgsSchema_default = ToDoListUpsertArgsSchema;

export {
  ToDoListSelectSchema,
  ToDoListUpsertArgsSchema,
  ToDoListUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-62GSZBWT.js.map
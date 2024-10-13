import {
  ToDoListCreateInputSchema
} from "./chunk-TW25UU2O.js";
import {
  ToDoListUncheckedCreateInputSchema
} from "./chunk-4M7G42IO.js";
import {
  ToDoListUncheckedUpdateInputSchema
} from "./chunk-QKJX6CJD.js";
import {
  ToDoListUpdateInputSchema
} from "./chunk-KVHQBMWU.js";
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
//# sourceMappingURL=chunk-YUHQRPLD.js.map
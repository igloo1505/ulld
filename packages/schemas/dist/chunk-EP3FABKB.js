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
import {
  ToDoListOrderByWithRelationInputSchema
} from "./chunk-6DB5LE4C.js";
import {
  ToDoListScalarFieldEnumSchema
} from "./chunk-6GU2ZBVL.js";
import {
  ToDoListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-EP3FABKB.js.map
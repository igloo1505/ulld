import {
  KanbanCreateOrConnectWithoutListsInputSchema
} from "./chunk-RFG5MTAV.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-JDQBNOBK.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-S4ZEZQOI.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-2ED7MBMQ.js";

// src/database/inputTypeSchemas/KanbanCreateNestedOneWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanCreateNestedOneWithoutListsInputSchema = z.object({
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  connect: z.lazy(() => KanbanWhereUniqueInputSchema).optional()
}).strict();
var KanbanCreateNestedOneWithoutListsInputSchema_default = KanbanCreateNestedOneWithoutListsInputSchema;

export {
  KanbanCreateNestedOneWithoutListsInputSchema,
  KanbanCreateNestedOneWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-WOPNQPXB.js.map
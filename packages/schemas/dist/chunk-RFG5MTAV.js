import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-JDQBNOBK.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-S4ZEZQOI.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-2ED7MBMQ.js";

// src/database/inputTypeSchemas/KanbanCreateOrConnectWithoutListsInputSchema.ts
import { z } from "zod";
var KanbanCreateOrConnectWithoutListsInputSchema = z.object({
  where: z.lazy(() => KanbanWhereUniqueInputSchema),
  create: z.union([z.lazy(() => KanbanCreateWithoutListsInputSchema), z.lazy(() => KanbanUncheckedCreateWithoutListsInputSchema)])
}).strict();
var KanbanCreateOrConnectWithoutListsInputSchema_default = KanbanCreateOrConnectWithoutListsInputSchema;

export {
  KanbanCreateOrConnectWithoutListsInputSchema,
  KanbanCreateOrConnectWithoutListsInputSchema_default
};
//# sourceMappingURL=chunk-RFG5MTAV.js.map
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-XS7XXG3Z.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-W4N7VV73.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-YCFKQOM4.js";

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
//# sourceMappingURL=chunk-TMQFSW6S.js.map
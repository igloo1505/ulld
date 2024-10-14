import {
  KanbanCreateOrConnectWithoutListsInputSchema
} from "./chunk-TMQFSW6S.js";
import {
  KanbanCreateWithoutListsInputSchema
} from "./chunk-XS7XXG3Z.js";
import {
  KanbanUncheckedCreateWithoutListsInputSchema
} from "./chunk-W4N7VV73.js";
import {
  KanbanWhereUniqueInputSchema
} from "./chunk-YCFKQOM4.js";

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
//# sourceMappingURL=chunk-4MYB3G6J.js.map
import {
  KanbanUncheckedUpdateManyInputSchema
} from "./chunk-DFKJBTDK.js";
import {
  KanbanUpdateManyMutationInputSchema
} from "./chunk-UP2N3PLT.js";
import {
  KanbanWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/KanbanUpdateManyArgsSchema.ts
import { z } from "zod";
var KanbanUpdateManyArgsSchema = z.object({
  data: z.union([KanbanUpdateManyMutationInputSchema, KanbanUncheckedUpdateManyInputSchema]),
  where: KanbanWhereInputSchema.optional()
}).strict();
var KanbanUpdateManyArgsSchema_default = KanbanUpdateManyArgsSchema;

export {
  KanbanUpdateManyArgsSchema,
  KanbanUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-TUHGNDAC.js.map
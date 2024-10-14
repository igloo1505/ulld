import {
  KanbanUncheckedUpdateManyInputSchema
} from "./chunk-ZGBD7U7C.js";
import {
  KanbanUpdateManyMutationInputSchema
} from "./chunk-ZSSYJDKH.js";
import {
  KanbanWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-OAU6XWKN.js.map
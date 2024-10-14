import {
  WhiteboardUpdateManyMutationInputSchema
} from "./chunk-POLQRRKV.js";
import {
  WhiteboardUncheckedUpdateManyInputSchema
} from "./chunk-64KPWEC5.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-ZAT5W63Y.js";

// src/database/outputTypeSchemas/WhiteboardUpdateManyArgsSchema.ts
import { z } from "zod";
var WhiteboardUpdateManyArgsSchema = z.object({
  data: z.union([WhiteboardUpdateManyMutationInputSchema, WhiteboardUncheckedUpdateManyInputSchema]),
  where: WhiteboardWhereInputSchema.optional()
}).strict();
var WhiteboardUpdateManyArgsSchema_default = WhiteboardUpdateManyArgsSchema;

export {
  WhiteboardUpdateManyArgsSchema,
  WhiteboardUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-M42A6YZQ.js.map
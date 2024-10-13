import {
  WhiteboardUpdateManyMutationInputSchema
} from "./chunk-2WH3FGA6.js";
import {
  WhiteboardUncheckedUpdateManyInputSchema
} from "./chunk-QAAZ7D6W.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-LIAOFIT7.js";

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
//# sourceMappingURL=chunk-SPHGBZLA.js.map
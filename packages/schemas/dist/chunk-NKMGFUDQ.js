import {
  DailyFocusUpdateManyMutationInputSchema
} from "./chunk-NNR3WNZD.js";
import {
  DailyFocusUncheckedUpdateManyInputSchema
} from "./chunk-XFYQNN7W.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-I36SKJDA.js";

// src/database/outputTypeSchemas/DailyFocusUpdateManyArgsSchema.ts
import { z } from "zod";
var DailyFocusUpdateManyArgsSchema = z.object({
  data: z.union([DailyFocusUpdateManyMutationInputSchema, DailyFocusUncheckedUpdateManyInputSchema]),
  where: DailyFocusWhereInputSchema.optional()
}).strict();
var DailyFocusUpdateManyArgsSchema_default = DailyFocusUpdateManyArgsSchema;

export {
  DailyFocusUpdateManyArgsSchema,
  DailyFocusUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-NKMGFUDQ.js.map
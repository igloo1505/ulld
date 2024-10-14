import {
  DailyFocusUpdateManyMutationInputSchema
} from "./chunk-4J37Y7WO.js";
import {
  DailyFocusUncheckedUpdateManyInputSchema
} from "./chunk-T5ZLOAIG.js";
import {
  DailyFocusWhereInputSchema
} from "./chunk-COZ5TAGF.js";

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
//# sourceMappingURL=chunk-LZPGTWZO.js.map
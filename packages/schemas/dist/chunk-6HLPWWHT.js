import {
  WaitlistRequestUpdateManyMutationInputSchema
} from "./chunk-WLIYJP65.js";
import {
  WaitlistRequestUncheckedUpdateManyInputSchema
} from "./chunk-4WTPAURE.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-KWFDVZ6V.js";

// src/database/outputTypeSchemas/WaitlistRequestUpdateManyArgsSchema.ts
import { z } from "zod";
var WaitlistRequestUpdateManyArgsSchema = z.object({
  data: z.union([WaitlistRequestUpdateManyMutationInputSchema, WaitlistRequestUncheckedUpdateManyInputSchema]),
  where: WaitlistRequestWhereInputSchema.optional()
}).strict();
var WaitlistRequestUpdateManyArgsSchema_default = WaitlistRequestUpdateManyArgsSchema;

export {
  WaitlistRequestUpdateManyArgsSchema,
  WaitlistRequestUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-6HLPWWHT.js.map
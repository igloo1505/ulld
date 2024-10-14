import {
  WaitlistRequestUpdateManyMutationInputSchema
} from "./chunk-J5BWK3GZ.js";
import {
  WaitlistRequestUncheckedUpdateManyInputSchema
} from "./chunk-2KT4OU6W.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-7ELNXEAA.js";

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
//# sourceMappingURL=chunk-KEU72254.js.map
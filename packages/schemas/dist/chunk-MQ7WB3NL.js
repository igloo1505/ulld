import {
  DJTUncheckedUpdateManyInputSchema
} from "./chunk-TSKSHWRO.js";
import {
  DJTUpdateManyMutationInputSchema
} from "./chunk-2PKLBV3Z.js";
import {
  DJTWhereInputSchema
} from "./chunk-GGQFIP4C.js";

// src/database/outputTypeSchemas/DJTUpdateManyArgsSchema.ts
import { z } from "zod";
var DJTUpdateManyArgsSchema = z.object({
  data: z.union([DJTUpdateManyMutationInputSchema, DJTUncheckedUpdateManyInputSchema]),
  where: DJTWhereInputSchema.optional()
}).strict();
var DJTUpdateManyArgsSchema_default = DJTUpdateManyArgsSchema;

export {
  DJTUpdateManyArgsSchema,
  DJTUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-MQ7WB3NL.js.map
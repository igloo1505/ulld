import {
  DJTUncheckedUpdateManyInputSchema
} from "./chunk-NKCCSVUU.js";
import {
  DJTUpdateManyMutationInputSchema
} from "./chunk-SH6A2DJN.js";
import {
  DJTWhereInputSchema
} from "./chunk-AMDBRTLV.js";

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
//# sourceMappingURL=chunk-7WYWZAJS.js.map
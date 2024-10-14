import {
  ServingUncheckedUpdateManyInputSchema
} from "./chunk-TIRWV5UO.js";
import {
  ServingUpdateManyMutationInputSchema
} from "./chunk-JVQHRCWA.js";
import {
  ServingWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/ServingUpdateManyArgsSchema.ts
import { z } from "zod";
var ServingUpdateManyArgsSchema = z.object({
  data: z.union([ServingUpdateManyMutationInputSchema, ServingUncheckedUpdateManyInputSchema]),
  where: ServingWhereInputSchema.optional()
}).strict();
var ServingUpdateManyArgsSchema_default = ServingUpdateManyArgsSchema;

export {
  ServingUpdateManyArgsSchema,
  ServingUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-KXFWNQSD.js.map
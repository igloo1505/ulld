import {
  ServingUncheckedUpdateManyInputSchema
} from "./chunk-ZOR4NNR4.js";
import {
  ServingUpdateManyMutationInputSchema
} from "./chunk-GB2CAEBM.js";
import {
  ServingWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-L67GSN6A.js.map
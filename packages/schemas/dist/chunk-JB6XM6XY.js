import {
  BusinessContactUpdateManyMutationInputSchema
} from "./chunk-FFX3JDTA.js";
import {
  BusinessContactUncheckedUpdateManyInputSchema
} from "./chunk-CSBDHOQ6.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-RT67XEWS.js";

// src/database/outputTypeSchemas/BusinessContactUpdateManyArgsSchema.ts
import { z } from "zod";
var BusinessContactUpdateManyArgsSchema = z.object({
  data: z.union([BusinessContactUpdateManyMutationInputSchema, BusinessContactUncheckedUpdateManyInputSchema]),
  where: BusinessContactWhereInputSchema.optional()
}).strict();
var BusinessContactUpdateManyArgsSchema_default = BusinessContactUpdateManyArgsSchema;

export {
  BusinessContactUpdateManyArgsSchema,
  BusinessContactUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-JB6XM6XY.js.map
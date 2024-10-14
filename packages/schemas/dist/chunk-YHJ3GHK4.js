import {
  BusinessContactUpdateManyMutationInputSchema
} from "./chunk-CRY2Z7AJ.js";
import {
  BusinessContactUncheckedUpdateManyInputSchema
} from "./chunk-C4Y6DFWW.js";
import {
  BusinessContactWhereInputSchema
} from "./chunk-4TBUKZ6H.js";

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
//# sourceMappingURL=chunk-YHJ3GHK4.js.map
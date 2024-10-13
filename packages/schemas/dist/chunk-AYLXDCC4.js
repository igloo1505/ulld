import {
  BusinessContactCreateManyInputSchema
} from "./chunk-YOR54E35.js";

// src/database/outputTypeSchemas/BusinessContactCreateManyArgsSchema.ts
import { z } from "zod";
var BusinessContactCreateManyArgsSchema = z.object({
  data: z.union([BusinessContactCreateManyInputSchema, BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BusinessContactCreateManyArgsSchema_default = BusinessContactCreateManyArgsSchema;

export {
  BusinessContactCreateManyArgsSchema,
  BusinessContactCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-AYLXDCC4.js.map
import {
  BusinessContactCreateManyInputSchema
} from "./chunk-YOR54E35.js";

// src/database/outputTypeSchemas/BusinessContactCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var BusinessContactCreateManyAndReturnArgsSchema = z.object({
  data: z.union([BusinessContactCreateManyInputSchema, BusinessContactCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var BusinessContactCreateManyAndReturnArgsSchema_default = BusinessContactCreateManyAndReturnArgsSchema;

export {
  BusinessContactCreateManyAndReturnArgsSchema,
  BusinessContactCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-DMJ4VT6N.js.map
import {
  DefinitionCreateManyInputSchema
} from "./chunk-PICJJJY4.js";

// src/database/outputTypeSchemas/DefinitionCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var DefinitionCreateManyAndReturnArgsSchema = z.object({
  data: z.union([DefinitionCreateManyInputSchema, DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DefinitionCreateManyAndReturnArgsSchema_default = DefinitionCreateManyAndReturnArgsSchema;

export {
  DefinitionCreateManyAndReturnArgsSchema,
  DefinitionCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-LPXLG7J6.js.map
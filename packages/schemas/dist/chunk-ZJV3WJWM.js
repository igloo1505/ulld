import {
  DefinitionCreateManyInputSchema
} from "./chunk-PICJJJY4.js";

// src/database/outputTypeSchemas/DefinitionCreateManyArgsSchema.ts
import { z } from "zod";
var DefinitionCreateManyArgsSchema = z.object({
  data: z.union([DefinitionCreateManyInputSchema, DefinitionCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var DefinitionCreateManyArgsSchema_default = DefinitionCreateManyArgsSchema;

export {
  DefinitionCreateManyArgsSchema,
  DefinitionCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-ZJV3WJWM.js.map
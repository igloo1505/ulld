import {
  WhiteboardCreateManyInputSchema
} from "./chunk-EAGDW2NG.js";

// src/database/outputTypeSchemas/WhiteboardCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var WhiteboardCreateManyAndReturnArgsSchema = z.object({
  data: z.union([WhiteboardCreateManyInputSchema, WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var WhiteboardCreateManyAndReturnArgsSchema_default = WhiteboardCreateManyAndReturnArgsSchema;

export {
  WhiteboardCreateManyAndReturnArgsSchema,
  WhiteboardCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-NNU6GZCB.js.map
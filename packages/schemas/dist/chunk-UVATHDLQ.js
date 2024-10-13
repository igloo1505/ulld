import {
  WhiteboardCreateManyInputSchema
} from "./chunk-EAGDW2NG.js";

// src/database/outputTypeSchemas/WhiteboardCreateManyArgsSchema.ts
import { z } from "zod";
var WhiteboardCreateManyArgsSchema = z.object({
  data: z.union([WhiteboardCreateManyInputSchema, WhiteboardCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var WhiteboardCreateManyArgsSchema_default = WhiteboardCreateManyArgsSchema;

export {
  WhiteboardCreateManyArgsSchema,
  WhiteboardCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-UVATHDLQ.js.map
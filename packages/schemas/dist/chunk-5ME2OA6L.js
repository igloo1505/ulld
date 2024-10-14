import {
  WhiteboardCreateManyInputSchema
} from "./chunk-CL5B5JNI.js";

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
//# sourceMappingURL=chunk-5ME2OA6L.js.map
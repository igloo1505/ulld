// src/database/inputTypeSchemas/WhiteboardSelectSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardSelectSchema_default = WhiteboardSelectSchema;
export {
  WhiteboardSelectSchema,
  WhiteboardSelectSchema_default as default
};
//# sourceMappingURL=WhiteboardSelectSchema.js.map
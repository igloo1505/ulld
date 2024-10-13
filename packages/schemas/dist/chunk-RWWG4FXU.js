// src/database/inputTypeSchemas/WhiteboardCreateInputSchema.ts
import { z } from "zod";
var WhiteboardCreateInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var WhiteboardCreateInputSchema_default = WhiteboardCreateInputSchema;

export {
  WhiteboardCreateInputSchema,
  WhiteboardCreateInputSchema_default
};
//# sourceMappingURL=chunk-RWWG4FXU.js.map
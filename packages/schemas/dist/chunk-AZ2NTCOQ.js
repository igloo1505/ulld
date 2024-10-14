// src/database/inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.ts
import { z } from "zod";
var WhiteboardUncheckedCreateInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var WhiteboardUncheckedCreateInputSchema_default = WhiteboardUncheckedCreateInputSchema;

export {
  WhiteboardUncheckedCreateInputSchema,
  WhiteboardUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-AZ2NTCOQ.js.map
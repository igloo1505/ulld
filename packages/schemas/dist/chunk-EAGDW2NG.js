// src/database/inputTypeSchemas/WhiteboardCreateManyInputSchema.ts
import { z } from "zod";
var WhiteboardCreateManyInputSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
}).strict();
var WhiteboardCreateManyInputSchema_default = WhiteboardCreateManyInputSchema;

export {
  WhiteboardCreateManyInputSchema,
  WhiteboardCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-EAGDW2NG.js.map
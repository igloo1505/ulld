// src/database/modelSchema/WhiteboardSchema.ts
import { z } from "zod";
var WhiteboardSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer)
});
var WhiteboardPartialSchema = WhiteboardSchema.partial();
var WhiteboardSchema_default = WhiteboardSchema;

export {
  WhiteboardSchema,
  WhiteboardPartialSchema,
  WhiteboardSchema_default
};
//# sourceMappingURL=chunk-WMY6GCTU.js.map
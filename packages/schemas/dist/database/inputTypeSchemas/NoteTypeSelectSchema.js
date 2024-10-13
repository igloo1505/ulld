// src/database/inputTypeSchemas/NoteTypeSelectSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeSelectSchema_default = NoteTypeSelectSchema;
export {
  NoteTypeSelectSchema,
  NoteTypeSelectSchema_default as default
};
//# sourceMappingURL=NoteTypeSelectSchema.js.map
// src/database/modelSchema/NoteTypeSchema.ts
import { z } from "zod";
var NoteTypeSchema = z.object({
  name: z.string()
});
var NoteTypePartialSchema = NoteTypeSchema.partial();
var NoteTypeSchema_default = NoteTypeSchema;

export {
  NoteTypeSchema,
  NoteTypePartialSchema,
  NoteTypeSchema_default
};
//# sourceMappingURL=chunk-2MVGGONP.js.map
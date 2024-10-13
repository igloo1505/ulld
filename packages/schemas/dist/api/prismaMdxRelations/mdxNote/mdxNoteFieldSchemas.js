// src/api/prismaMdxRelations/mdxNote/mdxNoteFieldSchemas.ts
import { z } from "zod";
var sequentialListPropsSchema = z.object({
  sequentialKey: z.string(),
  MdxNote: z.any().array().default([]),
  Ipynb: z.any().array().default([])
});
export {
  sequentialListPropsSchema
};
//# sourceMappingURL=mdxNoteFieldSchemas.js.map
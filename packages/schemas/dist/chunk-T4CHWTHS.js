// src/database/inputTypeSchemas/TaskCategorySchema.ts
import { z } from "zod";
var TaskCategorySchema = z.enum(["bug", "feature", "documentation", "online", "priority", "urgent", "work", "gym", "freetime", "study", "research", "paper"]);
var TaskCategorySchema_default = TaskCategorySchema;

export {
  TaskCategorySchema,
  TaskCategorySchema_default
};
//# sourceMappingURL=chunk-T4CHWTHS.js.map
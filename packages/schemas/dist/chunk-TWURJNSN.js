import {
  KanbanCountOutputTypeSelectSchema
} from "./chunk-DH7NMZLR.js";

// src/database/outputTypeSchemas/KanbanCountOutputTypeArgsSchema.ts
import { z } from "zod";
var KanbanCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => KanbanCountOutputTypeSelectSchema).nullish()
}).strict();
var KanbanCountOutputTypeArgsSchema_default = KanbanCountOutputTypeSelectSchema;

export {
  KanbanCountOutputTypeArgsSchema,
  KanbanCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-TWURJNSN.js.map
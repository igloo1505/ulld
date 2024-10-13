import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";

// src/database/outputTypeSchemas/WhiteboardFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardFindUniqueOrThrowArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereUniqueInputSchema
}).strict();
var WhiteboardFindUniqueOrThrowArgsSchema_default = WhiteboardFindUniqueOrThrowArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardFindUniqueOrThrowArgsSchema,
  WhiteboardFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-MD326W5Q.js.map
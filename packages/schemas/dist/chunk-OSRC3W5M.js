import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-AJO3CL4P.js";

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
//# sourceMappingURL=chunk-OSRC3W5M.js.map
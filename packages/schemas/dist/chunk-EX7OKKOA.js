import {
  WhiteboardOrderByWithRelationInputSchema
} from "./chunk-S2WQGTUF.js";
import {
  WhiteboardScalarFieldEnumSchema
} from "./chunk-TEBKPVR3.js";
import {
  WhiteboardWhereUniqueInputSchema
} from "./chunk-6DC2LE6E.js";
import {
  WhiteboardWhereInputSchema
} from "./chunk-LIAOFIT7.js";

// src/database/outputTypeSchemas/WhiteboardFindManyArgsSchema.ts
import { z } from "zod";
var WhiteboardSelectSchema = z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional()
}).strict();
var WhiteboardFindManyArgsSchema = z.object({
  select: WhiteboardSelectSchema.optional(),
  where: WhiteboardWhereInputSchema.optional(),
  orderBy: z.union([WhiteboardOrderByWithRelationInputSchema.array(), WhiteboardOrderByWithRelationInputSchema]).optional(),
  cursor: WhiteboardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([WhiteboardScalarFieldEnumSchema, WhiteboardScalarFieldEnumSchema.array()]).optional()
}).strict();
var WhiteboardFindManyArgsSchema_default = WhiteboardFindManyArgsSchema;

export {
  WhiteboardSelectSchema,
  WhiteboardFindManyArgsSchema,
  WhiteboardFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-EX7OKKOA.js.map
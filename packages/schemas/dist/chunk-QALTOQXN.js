import {
  WaitlistRequestOrderByWithRelationInputSchema
} from "./chunk-XL7WEO6A.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-7ELNXEAA.js";

// src/database/outputTypeSchemas/WaitlistRequestAggregateArgsSchema.ts
import { z } from "zod";
var WaitlistRequestAggregateArgsSchema = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([WaitlistRequestOrderByWithRelationInputSchema.array(), WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var WaitlistRequestAggregateArgsSchema_default = WaitlistRequestAggregateArgsSchema;

export {
  WaitlistRequestAggregateArgsSchema,
  WaitlistRequestAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-QALTOQXN.js.map
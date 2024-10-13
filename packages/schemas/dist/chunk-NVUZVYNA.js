import {
  WaitlistRequestOrderByWithRelationInputSchema
} from "./chunk-MT676SDN.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-KWFDVZ6V.js";

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
//# sourceMappingURL=chunk-NVUZVYNA.js.map
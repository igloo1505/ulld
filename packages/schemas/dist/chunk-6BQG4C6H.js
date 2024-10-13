import {
  IpynbScalarWhereWithAggregatesInputSchema
} from "./chunk-GACFNDMR.js";
import {
  IpynbOrderByWithAggregationInputSchema
} from "./chunk-WYI6R323.js";
import {
  IpynbScalarFieldEnumSchema
} from "./chunk-OA4CNC6Z.js";
import {
  IpynbWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/IpynbGroupByArgsSchema.ts
import { z } from "zod";
var IpynbGroupByArgsSchema = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([IpynbOrderByWithAggregationInputSchema.array(), IpynbOrderByWithAggregationInputSchema]).optional(),
  by: IpynbScalarFieldEnumSchema.array(),
  having: IpynbScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var IpynbGroupByArgsSchema_default = IpynbGroupByArgsSchema;

export {
  IpynbGroupByArgsSchema,
  IpynbGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-6BQG4C6H.js.map
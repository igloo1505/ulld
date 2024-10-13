import {
  IpynbOrderByWithRelationInputSchema
} from "./chunk-YHWJD5C7.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-TPNLH76D.js";
import {
  IpynbWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/IpynbAggregateArgsSchema.ts
import { z } from "zod";
var IpynbAggregateArgsSchema = z.object({
  where: IpynbWhereInputSchema.optional(),
  orderBy: z.union([IpynbOrderByWithRelationInputSchema.array(), IpynbOrderByWithRelationInputSchema]).optional(),
  cursor: IpynbWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var IpynbAggregateArgsSchema_default = IpynbAggregateArgsSchema;

export {
  IpynbAggregateArgsSchema,
  IpynbAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-HOVBDYBP.js.map
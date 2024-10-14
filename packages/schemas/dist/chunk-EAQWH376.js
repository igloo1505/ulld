import {
  IpynbOrderByWithRelationInputSchema
} from "./chunk-Y6EMIHNR.js";
import {
  IpynbWhereUniqueInputSchema
} from "./chunk-NCWREB5M.js";
import {
  IpynbWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-EAQWH376.js.map
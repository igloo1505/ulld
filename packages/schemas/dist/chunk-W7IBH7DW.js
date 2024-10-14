import {
  IpynbScalarWhereWithAggregatesInputSchema
} from "./chunk-3263NSJT.js";
import {
  IpynbOrderByWithAggregationInputSchema
} from "./chunk-Y3RSRNWA.js";
import {
  IpynbScalarFieldEnumSchema
} from "./chunk-WKKJ2TT7.js";
import {
  IpynbWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-W7IBH7DW.js.map
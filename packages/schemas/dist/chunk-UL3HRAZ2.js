import {
  WaitlistRequestOrderByWithRelationInputSchema
} from "./chunk-XL7WEO6A.js";
import {
  WaitlistRequestScalarFieldEnumSchema
} from "./chunk-IPGXNP7B.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-WBUZRDLR.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-7ELNXEAA.js";

// src/database/outputTypeSchemas/WaitlistRequestFindFirstArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestFindFirstArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([WaitlistRequestOrderByWithRelationInputSchema.array(), WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([WaitlistRequestScalarFieldEnumSchema, WaitlistRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var WaitlistRequestFindFirstArgsSchema_default = WaitlistRequestFindFirstArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestFindFirstArgsSchema,
  WaitlistRequestFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-UL3HRAZ2.js.map
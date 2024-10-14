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

// src/database/outputTypeSchemas/WaitlistRequestFindManyArgsSchema.ts
import { z } from "zod";
var WaitlistRequestSelectSchema = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional()
}).strict();
var WaitlistRequestFindManyArgsSchema = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([WaitlistRequestOrderByWithRelationInputSchema.array(), WaitlistRequestOrderByWithRelationInputSchema]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([WaitlistRequestScalarFieldEnumSchema, WaitlistRequestScalarFieldEnumSchema.array()]).optional()
}).strict();
var WaitlistRequestFindManyArgsSchema_default = WaitlistRequestFindManyArgsSchema;

export {
  WaitlistRequestSelectSchema,
  WaitlistRequestFindManyArgsSchema,
  WaitlistRequestFindManyArgsSchema_default
};
//# sourceMappingURL=chunk-BXKHUXLL.js.map
import {
  WaitlistRequestOrderByWithRelationInputSchema
} from "./chunk-MT676SDN.js";
import {
  WaitlistRequestScalarFieldEnumSchema
} from "./chunk-KVSXQT7M.js";
import {
  WaitlistRequestWhereUniqueInputSchema
} from "./chunk-7KCX5Z3W.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-KWFDVZ6V.js";

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
//# sourceMappingURL=chunk-G3O25GZ5.js.map
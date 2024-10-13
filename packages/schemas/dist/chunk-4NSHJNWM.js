import {
  SettingsOrderByWithRelationInputSchema
} from "./chunk-K6MLFEZC.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-X25TG6QI.js";
import {
  SettingsWhereInputSchema
} from "./chunk-EHHLO74Z.js";

// src/database/outputTypeSchemas/SettingsAggregateArgsSchema.ts
import { z } from "zod";
var SettingsAggregateArgsSchema = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([SettingsOrderByWithRelationInputSchema.array(), SettingsOrderByWithRelationInputSchema]).optional(),
  cursor: SettingsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SettingsAggregateArgsSchema_default = SettingsAggregateArgsSchema;

export {
  SettingsAggregateArgsSchema,
  SettingsAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-4NSHJNWM.js.map
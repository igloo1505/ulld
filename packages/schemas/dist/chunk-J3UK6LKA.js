import {
  AutoSettingOrderByWithRelationInputSchema
} from "./chunk-UY6JO7RD.js";
import {
  AutoSettingWhereUniqueInputSchema
} from "./chunk-4AABQBWV.js";
import {
  AutoSettingWhereInputSchema
} from "./chunk-I47O5T7B.js";

// src/database/outputTypeSchemas/AutoSettingAggregateArgsSchema.ts
import { z } from "zod";
var AutoSettingAggregateArgsSchema = z.object({
  where: AutoSettingWhereInputSchema.optional(),
  orderBy: z.union([AutoSettingOrderByWithRelationInputSchema.array(), AutoSettingOrderByWithRelationInputSchema]).optional(),
  cursor: AutoSettingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var AutoSettingAggregateArgsSchema_default = AutoSettingAggregateArgsSchema;

export {
  AutoSettingAggregateArgsSchema,
  AutoSettingAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-J3UK6LKA.js.map
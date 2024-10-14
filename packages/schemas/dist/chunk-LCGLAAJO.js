import {
  SettingsOrderByWithRelationInputSchema
} from "./chunk-MLT4QA76.js";
import {
  SettingsWhereUniqueInputSchema
} from "./chunk-TBMVEKRR.js";
import {
  SettingsWhereInputSchema
} from "./chunk-ULKFREWN.js";

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
//# sourceMappingURL=chunk-LCGLAAJO.js.map
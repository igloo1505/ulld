import {
  SettingsScalarWhereWithAggregatesInputSchema
} from "./chunk-7AEUX6Z7.js";
import {
  SettingsOrderByWithAggregationInputSchema
} from "./chunk-UOLBCJO2.js";
import {
  SettingsScalarFieldEnumSchema
} from "./chunk-F7P3K44D.js";
import {
  SettingsWhereInputSchema
} from "./chunk-ULKFREWN.js";

// src/database/outputTypeSchemas/SettingsGroupByArgsSchema.ts
import { z } from "zod";
var SettingsGroupByArgsSchema = z.object({
  where: SettingsWhereInputSchema.optional(),
  orderBy: z.union([SettingsOrderByWithAggregationInputSchema.array(), SettingsOrderByWithAggregationInputSchema]).optional(),
  by: SettingsScalarFieldEnumSchema.array(),
  having: SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SettingsGroupByArgsSchema_default = SettingsGroupByArgsSchema;

export {
  SettingsGroupByArgsSchema,
  SettingsGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-OYLKL56D.js.map
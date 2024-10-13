import {
  SettingsScalarWhereWithAggregatesInputSchema
} from "./chunk-VCDOFBF4.js";
import {
  SettingsOrderByWithAggregationInputSchema
} from "./chunk-3BSGALLR.js";
import {
  SettingsScalarFieldEnumSchema
} from "./chunk-CYRVHWML.js";
import {
  SettingsWhereInputSchema
} from "./chunk-EHHLO74Z.js";

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
//# sourceMappingURL=chunk-GMMU4HY7.js.map
import {
  DailyFocusCreateInputSchema
} from "./chunk-XEGH4DBV.js";
import {
  DailyFocusUncheckedCreateInputSchema
} from "./chunk-APECMFWK.js";
import {
  DailyFocusUpdateInputSchema
} from "./chunk-AZXGKIVS.js";
import {
  DailyFocusUncheckedUpdateInputSchema
} from "./chunk-MC4CJQSB.js";
import {
  DailyFocusWhereUniqueInputSchema
} from "./chunk-OFZ4JWLS.js";

// src/database/outputTypeSchemas/DailyFocusUpsertArgsSchema.ts
import { z } from "zod";
var DailyFocusSelectSchema = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var DailyFocusUpsertArgsSchema = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema,
  create: z.union([DailyFocusCreateInputSchema, DailyFocusUncheckedCreateInputSchema]),
  update: z.union([DailyFocusUpdateInputSchema, DailyFocusUncheckedUpdateInputSchema])
}).strict();
var DailyFocusUpsertArgsSchema_default = DailyFocusUpsertArgsSchema;

export {
  DailyFocusSelectSchema,
  DailyFocusUpsertArgsSchema,
  DailyFocusUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-GTNDV4M2.js.map
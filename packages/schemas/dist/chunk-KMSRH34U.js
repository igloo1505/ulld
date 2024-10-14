import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  BytesFilterSchema
} from "./chunk-CGUG7AXK.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/SettingsAppendixWhereInputSchema.ts
import { z } from "zod";
var SettingsAppendixWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => SettingsAppendixWhereInputSchema), z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsAppendixWhereInputSchema), z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => BytesFilterSchema), z.instanceof(Buffer)]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var SettingsAppendixWhereInputSchema_default = SettingsAppendixWhereInputSchema;

export {
  SettingsAppendixWhereInputSchema,
  SettingsAppendixWhereInputSchema_default
};
//# sourceMappingURL=chunk-KMSRH34U.js.map
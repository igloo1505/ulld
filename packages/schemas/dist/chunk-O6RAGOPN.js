import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-O6RAGOPN.js.map
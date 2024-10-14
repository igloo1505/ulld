import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/FeatureRequestWhereInputSchema.ts
import { z } from "zod";
var FeatureRequestWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => FeatureRequestWhereInputSchema), z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeatureRequestWhereInputSchema), z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict();
var FeatureRequestWhereInputSchema_default = FeatureRequestWhereInputSchema;

export {
  FeatureRequestWhereInputSchema,
  FeatureRequestWhereInputSchema_default
};
//# sourceMappingURL=chunk-DVDRYS7P.js.map
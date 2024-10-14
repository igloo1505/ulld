import {
  FeatureRequestWhereInputSchema
} from "./chunk-DVDRYS7P.js";
import {
  StringNullableListFilterSchema
} from "./chunk-7OQ35RBX.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/FeatureRequestWhereUniqueInputSchema.ts
import { z } from "zod";
var FeatureRequestWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => FeatureRequestWhereInputSchema), z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => FeatureRequestWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => FeatureRequestWhereInputSchema), z.lazy(() => FeatureRequestWhereInputSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  message: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  category: z.lazy(() => StringNullableListFilterSchema).optional(),
  userBase: z.lazy(() => StringNullableListFilterSchema).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
}).strict());
var FeatureRequestWhereUniqueInputSchema_default = FeatureRequestWhereUniqueInputSchema;

export {
  FeatureRequestWhereUniqueInputSchema,
  FeatureRequestWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-RQECGBYQ.js.map
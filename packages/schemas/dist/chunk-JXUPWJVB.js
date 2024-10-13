import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-JXUPWJVB.js.map
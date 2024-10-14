import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/WaitlistRequestWhereInputSchema.ts
import { z } from "zod";
var WaitlistRequestWhereInputSchema = z.object({
  AND: z.union([z.lazy(() => WaitlistRequestWhereInputSchema), z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistRequestWhereInputSchema), z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  emailsSent: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional()
}).strict();
var WaitlistRequestWhereInputSchema_default = WaitlistRequestWhereInputSchema;

export {
  WaitlistRequestWhereInputSchema,
  WaitlistRequestWhereInputSchema_default
};
//# sourceMappingURL=chunk-7ELNXEAA.js.map
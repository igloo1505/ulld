import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

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
//# sourceMappingURL=chunk-KWFDVZ6V.js.map
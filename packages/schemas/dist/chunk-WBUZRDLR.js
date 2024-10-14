import {
  WaitlistRequestWhereInputSchema
} from "./chunk-7ELNXEAA.js";
import {
  IntFilterSchema
} from "./chunk-EMYNQWE7.js";
import {
  DateTimeFilterSchema
} from "./chunk-3ZHCKO62.js";
import {
  StringFilterSchema
} from "./chunk-IQLIYD6K.js";

// src/database/inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema.ts
import { z } from "zod";
var WaitlistRequestWhereUniqueInputSchema = z.object({
  id: z.number().int()
}).and(z.object({
  id: z.number().int().optional(),
  AND: z.union([z.lazy(() => WaitlistRequestWhereInputSchema), z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => WaitlistRequestWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => WaitlistRequestWhereInputSchema), z.lazy(() => WaitlistRequestWhereInputSchema).array()]).optional(),
  email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  receivedOn: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  emailsSent: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional()
}).strict());
var WaitlistRequestWhereUniqueInputSchema_default = WaitlistRequestWhereUniqueInputSchema;

export {
  WaitlistRequestWhereUniqueInputSchema,
  WaitlistRequestWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-WBUZRDLR.js.map
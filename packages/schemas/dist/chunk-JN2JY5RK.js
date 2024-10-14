import {
  GoogleCalendarAuthCreateManyInputSchema
} from "./chunk-PAHAUMI4.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthCreateManyArgsSchema = z.object({
  data: z.union([GoogleCalendarAuthCreateManyInputSchema, GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyArgsSchema_default = GoogleCalendarAuthCreateManyArgsSchema;

export {
  GoogleCalendarAuthCreateManyArgsSchema,
  GoogleCalendarAuthCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-JN2JY5RK.js.map
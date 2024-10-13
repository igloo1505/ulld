import {
  GoogleCalendarAuthCreateManyInputSchema
} from "./chunk-P7XFCTFQ.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthCreateManyAndReturnArgsSchema = z.object({
  data: z.union([GoogleCalendarAuthCreateManyInputSchema, GoogleCalendarAuthCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var GoogleCalendarAuthCreateManyAndReturnArgsSchema_default = GoogleCalendarAuthCreateManyAndReturnArgsSchema;

export {
  GoogleCalendarAuthCreateManyAndReturnArgsSchema,
  GoogleCalendarAuthCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-ZTRB7A2Q.js.map
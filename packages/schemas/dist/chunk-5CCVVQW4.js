import {
  GoogleCalendarAuthUpdateManyMutationInputSchema
} from "./chunk-AHJXWA5E.js";
import {
  GoogleCalendarAuthUncheckedUpdateManyInputSchema
} from "./chunk-SEMAW2TQ.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-L4VQ3HR7.js";

// src/database/outputTypeSchemas/GoogleCalendarAuthUpdateManyArgsSchema.ts
import { z } from "zod";
var GoogleCalendarAuthUpdateManyArgsSchema = z.object({
  data: z.union([GoogleCalendarAuthUpdateManyMutationInputSchema, GoogleCalendarAuthUncheckedUpdateManyInputSchema]),
  where: GoogleCalendarAuthWhereInputSchema.optional()
}).strict();
var GoogleCalendarAuthUpdateManyArgsSchema_default = GoogleCalendarAuthUpdateManyArgsSchema;

export {
  GoogleCalendarAuthUpdateManyArgsSchema,
  GoogleCalendarAuthUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-5CCVVQW4.js.map
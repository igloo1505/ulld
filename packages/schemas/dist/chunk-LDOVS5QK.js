import {
  GoogleCalendarAuthUpdateManyMutationInputSchema
} from "./chunk-CW7FC7T3.js";
import {
  GoogleCalendarAuthUncheckedUpdateManyInputSchema
} from "./chunk-KE2RP6D6.js";
import {
  GoogleCalendarAuthWhereInputSchema
} from "./chunk-JBN2LWOB.js";

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
//# sourceMappingURL=chunk-LDOVS5QK.js.map
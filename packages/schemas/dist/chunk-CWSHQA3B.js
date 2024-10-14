import {
  DIETARY_GOALSchema
} from "./chunk-LRTPFMPI.js";

// src/database/inputTypeSchemas/EnumDIETARY_GOALNullableListFilterSchema.ts
import { z } from "zod";
var EnumDIETARY_GOALNullableListFilterSchema = z.object({
  equals: z.lazy(() => DIETARY_GOALSchema).array().optional().nullable(),
  has: z.lazy(() => DIETARY_GOALSchema).optional().nullable(),
  hasEvery: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  hasSome: z.lazy(() => DIETARY_GOALSchema).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
var EnumDIETARY_GOALNullableListFilterSchema_default = EnumDIETARY_GOALNullableListFilterSchema;

export {
  EnumDIETARY_GOALNullableListFilterSchema,
  EnumDIETARY_GOALNullableListFilterSchema_default
};
//# sourceMappingURL=chunk-CWSHQA3B.js.map
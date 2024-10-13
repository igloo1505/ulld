import {
  KanBanCardSelectSchema
} from "./chunk-MB3VDGRW.js";
import {
  KanBanCardIncludeSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/KanBanCardArgsSchema.ts
import { z } from "zod";
var KanBanCardArgsSchema = z.object({
  select: z.lazy(() => KanBanCardSelectSchema).optional(),
  include: z.lazy(() => KanBanCardIncludeSchema).optional()
}).strict();
var KanBanCardArgsSchema_default = KanBanCardArgsSchema;

export {
  KanBanCardArgsSchema,
  KanBanCardArgsSchema_default
};
//# sourceMappingURL=chunk-T7JHWHDZ.js.map
import {
  KanBanCardSelectSchema
} from "./chunk-3UXFQEBU.js";
import {
  KanBanCardIncludeSchema
} from "./chunk-JV52BDQC.js";

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
//# sourceMappingURL=chunk-G2PDWEXH.js.map
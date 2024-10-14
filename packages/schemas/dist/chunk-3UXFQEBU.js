import {
  KanBanListArgsSchema
} from "./chunk-JV52BDQC.js";

// src/database/inputTypeSchemas/KanBanCardSelectSchema.ts
import { z } from "zod";
var KanBanCardSelectSchema = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardSelectSchema_default = KanBanCardSelectSchema;

export {
  KanBanCardSelectSchema,
  KanBanCardSelectSchema_default
};
//# sourceMappingURL=chunk-3UXFQEBU.js.map
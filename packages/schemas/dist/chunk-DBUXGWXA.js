import {
  KanBanListCreateManyInputSchema
} from "./chunk-L52MMWNN.js";

// src/database/outputTypeSchemas/KanBanListCreateManyArgsSchema.ts
import { z } from "zod";
var KanBanListCreateManyArgsSchema = z.object({
  data: z.union([KanBanListCreateManyInputSchema, KanBanListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanListCreateManyArgsSchema_default = KanBanListCreateManyArgsSchema;

export {
  KanBanListCreateManyArgsSchema,
  KanBanListCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-DBUXGWXA.js.map
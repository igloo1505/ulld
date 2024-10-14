import {
  KanBanListCreateManyInputSchema
} from "./chunk-KGXKIKBX.js";

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
//# sourceMappingURL=chunk-UTX2NB7U.js.map
import {
  KanBanListCreateManyInputSchema
} from "./chunk-L52MMWNN.js";

// src/database/outputTypeSchemas/KanBanListCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var KanBanListCreateManyAndReturnArgsSchema = z.object({
  data: z.union([KanBanListCreateManyInputSchema, KanBanListCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanListCreateManyAndReturnArgsSchema_default = KanBanListCreateManyAndReturnArgsSchema;

export {
  KanBanListCreateManyAndReturnArgsSchema,
  KanBanListCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-EJPX2VKS.js.map
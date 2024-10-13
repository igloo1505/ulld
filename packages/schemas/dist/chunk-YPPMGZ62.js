import {
  KanBanCardCreateManyInputSchema
} from "./chunk-GHS7LW5H.js";

// src/database/outputTypeSchemas/KanBanCardCreateManyAndReturnArgsSchema.ts
import { z } from "zod";
var KanBanCardCreateManyAndReturnArgsSchema = z.object({
  data: z.union([KanBanCardCreateManyInputSchema, KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanCardCreateManyAndReturnArgsSchema_default = KanBanCardCreateManyAndReturnArgsSchema;

export {
  KanBanCardCreateManyAndReturnArgsSchema,
  KanBanCardCreateManyAndReturnArgsSchema_default
};
//# sourceMappingURL=chunk-YPPMGZ62.js.map
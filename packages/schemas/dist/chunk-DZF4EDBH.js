import {
  KanBanCardCreateManyInputSchema
} from "./chunk-TTRD7SFX.js";

// src/database/outputTypeSchemas/KanBanCardCreateManyArgsSchema.ts
import { z } from "zod";
var KanBanCardCreateManyArgsSchema = z.object({
  data: z.union([KanBanCardCreateManyInputSchema, KanBanCardCreateManyInputSchema.array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var KanBanCardCreateManyArgsSchema_default = KanBanCardCreateManyArgsSchema;

export {
  KanBanCardCreateManyArgsSchema,
  KanBanCardCreateManyArgsSchema_default
};
//# sourceMappingURL=chunk-DZF4EDBH.js.map
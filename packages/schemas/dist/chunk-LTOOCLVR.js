import {
  KanBanListCountOutputTypeSelectSchema
} from "./chunk-Q7ZKWI2P.js";

// src/database/outputTypeSchemas/KanBanListCountOutputTypeArgsSchema.ts
import { z } from "zod";
var KanBanListCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => KanBanListCountOutputTypeSelectSchema).nullish()
}).strict();
var KanBanListCountOutputTypeArgsSchema_default = KanBanListCountOutputTypeSelectSchema;

export {
  KanBanListCountOutputTypeArgsSchema,
  KanBanListCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-LTOOCLVR.js.map
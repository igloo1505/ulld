// src/zod/meta.ts
import { z } from "zod";
var appMetaSchema = z.object({
  title: z.string().default("Uh Little Less Dum"),
  desc: z.string().optional()
}).default({});

export {
  appMetaSchema
};
//# sourceMappingURL=chunk-6VCBDKOB.js.map
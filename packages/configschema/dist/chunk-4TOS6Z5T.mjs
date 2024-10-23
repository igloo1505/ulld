// src/zod/meta.ts
import { z } from "zod";
var appMetaSchema = z.object({
  title: z.string().default("Uh Little Less Dum"),
  desc: z.string().optional()
}).default({});
var appMetaSchemaOutput = z.object({
  title: z.string(),
  desc: z.string().optional()
});

export {
  appMetaSchema,
  appMetaSchemaOutput
};
//# sourceMappingURL=chunk-4TOS6Z5T.mjs.map
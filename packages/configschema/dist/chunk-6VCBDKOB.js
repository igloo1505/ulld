import { z } from 'zod';

// src/zod/meta.ts
var appMetaSchema = z.object({
  title: z.string().default("Uh Little Less Dum"),
  desc: z.string().optional()
}).default({});

export { appMetaSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-6VCBDKOB.js.map
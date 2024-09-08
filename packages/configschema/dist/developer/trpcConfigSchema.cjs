'use strict';

var zod = require('zod');

// src/developer/trpcConfigSchema.ts
var trpcConfigSchema = zod.z.object({
  routerName: zod.z.string(),
  routerExport: zod.z.string().describe(
    "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property."
  )
});

exports.trpcConfigSchema = trpcConfigSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=trpcConfigSchema.cjs.map
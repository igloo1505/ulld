"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/trpcConfigSchema.ts
var _zod = require('zod');
var trpcConfigSchema = _zod.z.object({
  routerName: _zod.z.string(),
  routerExport: _zod.z.string().describe(
    "The optional export path of a trpc router that will be appended to the main router at the devloperConfigSchema.trpc.routerName property."
  )
});



exports.trpcConfigSchema = trpcConfigSchema;
//# sourceMappingURL=chunk-DGZ3LR7W.cjs.map
'use strict';

var zod = require('zod');

// src/zod/meta.ts
var appMetaSchema = zod.z.object({
  title: zod.z.string().default("Uh Little Less Dum"),
  desc: zod.z.string().optional()
}).default({});

exports.appMetaSchema = appMetaSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=meta.cjs.map
'use strict';

var zod = require('zod');

// src/schemas/mdx/parseMdxStringSchema.ts
var parseMdxStringSchema = zod.z.object({
  content: zod.z.string(),
  display: zod.z.union([zod.z.literal("display"), zod.z.literal("inline")])
});

exports.parseMdxStringSchema = parseMdxStringSchema;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringSchema.cjs.map